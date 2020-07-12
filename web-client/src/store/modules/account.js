import {
  FETCH_ACCOUNTS,
  GET_ACCOUNT_INFORMATION,
  REMOVE_ACCOUNT,
  SAVE_ACCOUNT,
  UPDATE_ACCOUNT,
} from "../types/account";
import AccountHTTP from "../../http/account";

const AccountStoreModule = {
  actions: {
    [SAVE_ACCOUNT]: async (context, { name, username, password }) => {
      try {
        const result = await AccountHTTP.save({ name, username, password });
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [FETCH_ACCOUNTS]: async (context) => {
      try {
        const result = await AccountHTTP.fetch();
        const { accounts } = result.data;
        return { accounts };
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [GET_ACCOUNT_INFORMATION]: async (context, accountID) => {
      try {
        const result = await AccountHTTP.getInformation(accountID);
        const { information } = result.data;
        return information;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [UPDATE_ACCOUNT]: async (
      context,
      { accountID, name, username, password }
    ) => {
      try {
        const accountFormData = new FormData();
        accountFormData.append("accountID", accountID);
        accountFormData.append("name", name);
        accountFormData.append("username", username);
        accountFormData.append("password", password);
        const result = await AccountHTTP.update(accountFormData);
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [REMOVE_ACCOUNT]: async (context, accountID) => {
      try {
        const result = await AccountHTTP.remove(accountID);
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
  },
};

export default AccountStoreModule;
