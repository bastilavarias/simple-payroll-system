import Database from "../../database";
import { AccountForm } from "./type";

const AccountModel = {
  save: async (userForm: AccountForm, hashedPassword: string) => {
    const query = `insert into account (name, username, password) values ($1, $2, $3);`;
    const { name, username } = userForm;
    const parameters = [name, username, hashedPassword];
    await Database.execute(query, parameters);
  },

  fetch: async () => {
    const query = `select a.id, a.name, a.username from account a where a.is_deleted = false;`;
    const { rows } = await Database.execute(query);
    return rows.length > 0 ? rows : [];
  },

  getInformation: () => {},

  update: () => {},

  delete: () => {},
};

export default AccountModel;
