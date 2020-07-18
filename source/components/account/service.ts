import { AccountForm } from "./type";
import UtilityService from "../utility/service";
import AccountModel from "./model";

const AccountService = {
  save: async (accountForm: AccountForm) => {
    let message = "";
    const error = { username: "" };
    const gotAccountInformation = await AccountModel.getInformationByUsername(
      accountForm.username
    );
    const isAccountUsernameExists =
      Object.keys(gotAccountInformation).length > 0;
    if (isAccountUsernameExists) {
      error.username = "Username already exists.";
      return {
        error,
        message,
      };
    }
    const hashedPassword = await UtilityService.hashPassword(
      accountForm.password
    );
    await AccountModel.save(accountForm, hashedPassword);
    message = "Account was successfully saved.";
    return {
      error,
      message,
    };
  },

  fetch: async () => {
    const error = {};
    const accounts = await AccountModel.fetch();
    return {
      accounts,
      error,
    };
  },

  getInformation: async (accountID: number) => {
    const error = {};
    const gotAccountInformation = await AccountModel.getInformation(accountID);
    delete gotAccountInformation.password;
    return {
      information: gotAccountInformation,
      error,
    };
  },

  update: async (accountID: number, accountForm: AccountForm) => {
    const error = {};
    let message = "";
    const gotAccountInformation = await AccountModel.getInformation(accountID);
    let newHashedPassword = gotAccountInformation.password;
    if (accountForm.password) {
      newHashedPassword = await UtilityService.hashPassword(
        accountForm.password
      );
    }
    await AccountModel.update(accountID, accountForm, newHashedPassword);
    message = "Account was successfully updated.";
    return {
      error,
      message,
    };
  },

  remove: async (accountID: number) => {
    const error = {};
    let message = "Account was successfully removed.";
    await AccountModel.remove(accountID);
    return {
      error,
      message,
    };
  },
};

export default AccountService;
