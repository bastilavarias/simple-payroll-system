import Database from "../index";
import AccountTableQuery from "./modules/account";
import DepartmentTableQuery from "./modules/department";

const executeTables = async () => {
  await Database.execute(AccountTableQuery);
  await Database.execute(DepartmentTableQuery);
};

executeTables().then(() => console.log("Database tables created."));
