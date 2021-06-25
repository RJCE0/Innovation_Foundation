import { projectSQL } from "./sql";

const pgp = require("pg-promise")({});
require("dotenv").config();

// To connect to database
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
      .any(projectSQL.exclusiveInfo, { condition: `id=${oppId}` })
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
      condition += `AND location = 'Remote' `;
    } else if (selectLocation != null) {
      condition += `AND location = '${selectLocation}' `;
    }

    if (startDate != null) {
      condition += `AND date >='${Database.formatQueryDate(startDate)}' `;
    }
    if (endDate != null) {
      condition += `AND date <='${Database.formatQueryDate(endDate)}' `;
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

      condition += `AND date_posted>='${resDate}' `;
    }

    // Minimum pay filter (slider)
    if (minPay != null) {
      condition += `AND pay>=${minPay} `;
    }

    // Exclusive only
    if (exclusiveFilter) {
      condition += `AND exclusive=true `;
    }

    // Sort by
    if (sortByValue != null) {
      switch (sortByValue) {
        case "Most Recently Posted":
          condition += `ORDER BY date_posted desc `;
          break;
        case "Most Popular":
          condition += `ORDER BY views desc `;
          break;
        case "Start Date":
          condition += `ORDER BY date `;
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

  static async getSortedFav(input) {
    var condition = `AND fav=true `;
    var result = {};
    let { sortByValue } = JSON.parse(input);

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

  static async getAllApplications(input) {
    var result = {};
    var condition = "";

    if (input == "true") {
      console.log(input);
      condition = "WHERE user_id=0";
    }

    // execute query
    await db
      .any(projectSQL.getAllApplications, { condition: condition })
      .then((data) => {
        console.log("successful Application data retrieval");
        result = data;
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
    return result;
  }

  static async isApplied(input) {
    var result = {};
    let { user_id, oppId } = JSON.parse(input);

    // execute query
    await db
      .any(projectSQL.isApplied, { user_id: user_id, opp_id: oppId })
      .then((data) => {
        console.log("successful Application data retrieval");
        result = data;
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    return result.length != 0;
  }

  static async getUserApplications(input) {
    var result = {};

    // execute query
    await db
      .any(projectSQL.getUserApplications, { opp_id: input })
      .then((data) => {
        console.log("successful student Application data retrieval");
        result = data;
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    return result;
  }

  static async updateViews(input) {
    let { id, views } = input.params.body;

    await db
      .any(projectSQL.updateViews, { views: views, id: id })
      .then(() => {
        console.log("successful views update");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  static async updateFavourites(input) {
    let { id, fav } = input.params.body;

    await db
      .any(projectSQL.updateFav, { fav: fav, id: id })
      .then(() => {
        console.log("successful fav update");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  static async addApplication(input) {
    let { user_id, opp_id, name, email, mobile, additionalComments, file_url } =
      input.params.body;

    await db
      .any(projectSQL.addApplication, {
        user_id: user_id,
        opp_id: opp_id,
        name: name,
        email: email,
        mobile: mobile,
        comments: additionalComments,
        file_url: file_url,
      })
      .then(() => {
        console.log("successful application insertion");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  // Business side database functions
  static async addInternship(input) {
    let {
      title,
      location,
      summary,
      pay,
      start_date,
      role,
      c_description,
      skills_gained,
      requirements,
      image_url,
    } = input.params.body;
    console.log(input.params.body);

    var new_opp_id = null;

    // Get today's date in correct format
    const posted_date = new Date();
    const resDate =
      `${posted_date.getFullYear()}-` +
      `${posted_date.getMonth() + 1}-` +
      `${posted_date.getDate()}`;

    // Add to internships table
    await db
      .any(projectSQL.addOpportunity, {
        title: title,
        location: location,
        description: summary,
        pay: pay,
        date: this.formatQueryDate(start_date),
        image_url: image_url,
        date_posted: resDate,
      })
      .then((data) => {
        new_opp_id = data["0"].id;
        console.log("successful opportunity creation");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });

    const exclusive_info = {
      id: new_opp_id,
      role: role,
      c_description: c_description,
      skills_gained: skills_gained,
      requirements: requirements,
    };

    // Add to exclusive internships table
    this.addExclusiveOpportunity(exclusive_info);
  }

  // Add internship into exclusive table
  static async addExclusiveOpportunity(exclusive_info) {
    await db
      .any(projectSQL.addExclusive, { ...exclusive_info })
      .then(() => {
        console.log("successful exclusive internship insertion");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  static async updateApplicationStatus(input) {
    let { newStatus, user_id, opp_id } = input.params.body;

    await db
      .any(projectSQL.updateApplicationStatus, {
        status: newStatus,
        user_id: user_id,
        opp_id: opp_id,
      })
      .then(() => {
        console.log("successful user status update");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }

  static async deleteApplication(input) {
    let { user_id, opp_id } = input.params.body;
    console.log(user_id);
    console.log(opp_id);

    await db
      .any(projectSQL.deleteApplication, { user_id: user_id, opp_id: opp_id })
      .then(() => {
        console.log("successful application deletion");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  }
}

export default Database;
