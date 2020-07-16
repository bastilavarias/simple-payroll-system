import Database from "../index";
import AccountSeedQuery from "./modules/account";

const executeSeeds = async () => {
  await Database.execute(AccountSeedQuery);
};

executeSeeds().then(() => console.log("Database seeds created."));
