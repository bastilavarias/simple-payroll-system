import {
  CLEAR_ACCOUNT_ERROR,
  FETCH_ACCOUNTS,
  GET_ACCOUNT_INFORMATION,
  REMOVE_ACCOUNT,
  SAVE_ACCOUNT,
  SET_ACCOUNT_ERROR,
  UPDATE_ACCOUNT,
} from "../types/account";
import AccountHTTP from "../../http/account";

const defaultError = {
  username: "",
};

const AccountStoreModule = {
  state: {
    error: Object.assign({}, defaultError),
  },

  mutations: {
    [SET_ACCOUNT_ERROR]: (state, error) =>
      (state.error = Object.assign({}, error)),

    [CLEAR_ACCOUNT_ERROR]: (state) =>
      (state.error = Object.assign({}, defaultError)),
  },

  actions: {
    [SAVE_ACCOUNT]: async ({ commit }, { name, username, password, type }) => {
      try {
        const result = await AccountHTTP.save({
          name,
          username,
          password,
          type,
        });
        const { message } = result.data;
        return message;
      } catch (error) {
        commit(SET_ACCOUNT_ERROR, error.response.data);
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
      { accountID, name, username, password, type }
    ) => {
      try {
        const result = await AccountHTTP.update({
          accountID,
          name,
          username,
          password,
          type,
        });
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
