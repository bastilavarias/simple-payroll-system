import Database from "../index";
import AccountTableQuery from "./modules/account";
import DepartmentTableQuery from "./modules/department";
import DesignationTableQuery from "./modules/designation";

const executeTables = async () => {
  await Database.execute(AccountTableQuery);
  await Database.execute(DepartmentTableQuery);
  await Database.execute(DesignationTableQuery);
};

executeTables().then(() => console.log("Database tables created."));
