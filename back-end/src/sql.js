import { QueryFile } from "pg-promise";
import path from "path";

function sql(filename) {
  const sqlPath = path.join(__dirname, filename);
  return new QueryFile(sqlPath, { minify: true });
}

export const projectSQL = {
  addUser: sql("../sql/addUser.sql"),
  getAllOpportunities: sql("../sql/getAllOpportunities.sql"),
  getAllExclusives: sql("../sql/getAllExclusives.sql"),
  getAllFavourites: sql("../sql/getAllFavourites.sql"),
  getPaidInternships: sql("../sql/getPaidInternships.sql"),
  sortInternByViews: sql("../sql/sortInternByViews.sql"),
  customFilters: sql("../sql/customFilters.sql"),
};
