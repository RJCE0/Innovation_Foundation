import { projectSQL } from "./sql";

const pgp = require("pg-promise")({});
require("dotenv").config();

const dbInfo = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const db = pgp(dbInfo);

class Database {

  static formatQueryDate(date){
    console.log("INSIDE");
    [date, ] = date.split("T");
    return date;
  }

  // Extracted function to get queries with any number
  // of returned rows
  static async anyQueries(query){
    var result = {};

    await db
      .any(query)
      .then((data) => {
        console.log("success" + data);
        result = data;
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    return result;
  }

  static async getCustomFilterOpps(input){ 
    console.log(input)

    var result = {};
    var condition = '';

    let { selectLocation, selectPostedDate, startDate, endDate, minPay, fullRemote, exclusiveFilter} = JSON.parse(input);

    if(fullRemote){  
      condition += `AND location = 'Remote'`;
    } else if(selectLocation != null){
      condition += `AND location = '${selectLocation}'`;
    }
    
    if(startDate != null){
      condition += `AND date >='${Database.formatQueryDate(startDate)}'` ;
    }
    if(endDate != null){
      condition += `AND date <='${Database.formatQueryDate(endDate)}'`;
    }

    if(selectPostedDate != null){

      // get current date
      var postedDate = new Date();
      const day = postedDate.getDay();
      const date = postedDate.getDate();

      // update date to choose which point to search from
      switch(selectPostedDate){
        case "Today":
          break;
        case "This Week":
          postedDate.setDate(date - day);
          break;
        case "This Month":
          postedDate.setDate(1);
          break;
        case "This Year":
          postedDate.setDate(1);
          postedDate.setMonth(1);
          break;
        }
        
        // construct comparison date string for db
        var resDate = `${postedDate.getFullYear()}-`
                    + `${postedDate.getMonth()+1}-`
                    + `${postedDate.getDate()}`;

        condition+=`AND date_posted='${resDate}'`;
    }

    // Minimum pay filter (slider)
    if(minPay != null){
      condition+=`AND pay>=${minPay}`;
    }

    // Exclusive only
    if(exclusiveFilter){
      condition+=`AND exclusive=true`;
    }

    // execute query
    await db
    .any(projectSQL.customFilters, {condition: condition})
    .then((data) => {
      console.log("success" + data);
      result = data;
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });

    return result;
  }

  static async getAllOpportunities() {
    return this.anyQueries(projectSQL.getAllOpportunities);
  }

  static async getAllExclusives(){
    return this.anyQueries(projectSQL.getAllExclusives);
  }

  static async getAllFavourites(){
    return this.anyQueries(projectSQL.getAllFavourites);
  }

  static async getPaidInternships(){
    return this.anyQueries(projectSQL.getPaidInternships);
  }

  static async sortInternByViews(){
    return this.anyQueries(projectSQL.sortInternByViews);
  }

}

export default Database;
