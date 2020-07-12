import { AccountForm } from "./type";
import UtilityService from "../utility/service";
import AccountModel from "./model";

const AccountService = {
  save: async (accountForm: AccountForm) => {
    let message = "";
    const error = {};
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
    return {
      information: gotAccountInformation,
      error,
    };
  },

  update: async (accountID: number, accountForm: AccountForm) => {
    const error = {};
    let message = "";
    const gotAccountInformation = await AccountModel.getInformation(accountID);
    let newHashedPassword = gotAccountInformation.hashedPassword;
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

  delete: () => {},
};

export default AccountService;
