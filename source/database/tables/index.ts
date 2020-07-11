import Database from "../index";
import UserTableQuery from "./modules/account";

const executeTables = async () => {
  await Database.execute(UserTableQuery);
};

executeTables().then(() => console.log("Database tables created."));
