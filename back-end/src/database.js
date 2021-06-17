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
  static formatQueryDate(date) {
    [date] = date.split("T");
    return date;
  }

  // Extracted function to get queries with any number
  // of returned rows
  static async anyQueries(query) {
    var result = {};

    await db
      .any(query)
      .then((data) => {
        console.log("success");
        result = data;
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    return result;
  }

  // for generating exclusive pages
  static async getExclusiveById(input) {
    var result = {};

    let { oppId } = JSON.parse(input);

    // execute query
    await db
      .any(projectSQL.customFilters, { condition: `AND id=${oppId}` })
      .then((data) => {
        console.log("success");
        result = data;
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    return result;
  }

   // for generating exclusive pages extra information
   static async getExclusiveInfoById(input) {
    var result = {};

    let { oppId } = JSON.parse(input);

    // execute query
    await db
      .any(projectSQL.exclusiveInfo, { condition: `id=${oppId}`})
      .then((data) => {
        console.log("Success in retrieving exclusive information");
        result = data;
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    return result;
  }

  // For filters and sort by on discover
  static async getCustomFilterOpps(input) {
    console.log(input);

    var result = {};
    var condition = "";

    let {
      selectLocation,
      selectPostedDate,
      startDate,
      endDate,
      minPay,
      sortByValue,
      fullRemote,
      exclusiveFilter,
    } = JSON.parse(input);

    if (fullRemote) {
      condition += `AND location = 'Remote'`;
    } else if (selectLocation != null) {
      condition += `AND location = '${selectLocation}'`;
    }

    if (startDate != null) {
      condition += `AND date >='${Database.formatQueryDate(startDate)}'`;
    }
    if (endDate != null) {
      condition += `AND date <='${Database.formatQueryDate(endDate)}'`;
    }

    if (selectPostedDate != null) {
      // get current date
      var postedDate = new Date();
      const day = postedDate.getDay();
      const date = postedDate.getDate();

      // update date to choose which point to search from
      switch (selectPostedDate) {
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
      var resDate =
        `${postedDate.getFullYear()}-` +
        `${postedDate.getMonth() + 1}-` +
        `${postedDate.getDate()}`;

      condition += `AND date_posted>='${resDate}'`;
    }

    // Minimum pay filter (slider)
    if (minPay != null) {
      condition += `AND pay>=${minPay}`;
    }

    // Exclusive only
    if (exclusiveFilter) {
      condition += `AND exclusive=true`;
    }

    // Sort by
    if (sortByValue != null) {
      switch (sortByValue) {
        case "Most Recently Posted":
          condition += `ORDER BY date_posted desc`;
          break;
        case "Most Popular":
          condition += `ORDER BY views desc`;
          break;
        case "Start Date":
          condition += `ORDER BY date`;
          break;
      }
    }

    // execute query
    await db
      .any(projectSQL.customFilters, { condition: condition })
      .then((data) => {
        console.log("successful custom data retrieval");
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

  static async getAllExclusives() {
    return this.anyQueries(projectSQL.getAllExclusives);
  }

  static async getAllFavourites() {
    return this.anyQueries(projectSQL.getAllFavourites);
  }

  static async getPaidInternships() {
    return this.anyQueries(projectSQL.getPaidInternships);
  }

  static async sortInternByViews() {
    return this.anyQueries(projectSQL.sortInternByViews);
  }

  static async getRecents() {
    return this.anyQueries(projectSQL.getRecent);
  }

  static async updateViews(input) {

    let { id, views } = input.params.body;
    console.log("ID: ", id);
    console.log("VIEWS: ", views);

    await db
      .any(projectSQL.updateViews, { views: views, id: id })
      .then((data) => {
        console.log("successful views update");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }
}

export default Database;
