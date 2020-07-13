import Database from "../../database";
import { AccountForm, AccountInformation } from "./type";

const AccountModel = {
  save: async (accountForm: AccountForm, hashedPassword: string) => {
    const query = `insert into account (name, username, password) values ($1, $2, $3);`;
    const { name, username } = accountForm;
    const parameters = [name, username, hashedPassword];
    await Database.execute(query, parameters);
  },

  fetch: async () => {
    const query = `select a.id, a.name, a.username from account a where a.is_deleted = false order by id asc;`;
    const { rows } = await Database.execute(query);
    return rows.length > 0 ? rows : [];
  },

  getInformation: async (accountID: number): Promise<AccountInformation> => {
    const query = `select a.id, a.name, a.username, a.password "hashedPassword" from account a where a.is_deleted = false and a.id = $1;`;
    const parameters = [accountID];
    const { rows } = await Database.execute(query, parameters);
    return rows.length > 0 ? rows[0] : {};
  },

  update: async (
    accountID: number,
    accountForm: AccountForm,
    hashedPassword: string
  ) => {
    const query = `update account set name = $1, username = $2, password = $3 where id = $4;`;
    const { name, username } = accountForm;
    const parameters = [name, username, hashedPassword, accountID];
    await Database.execute(query, parameters);
  },

  remove: async (accountID: number) => {
    const query = `update account set is_deleted = true, deleted_at = now() where id = $1;`;
    const parameters = [accountID];
    await Database.execute(query, parameters);
  },
};

export default AccountModel;
