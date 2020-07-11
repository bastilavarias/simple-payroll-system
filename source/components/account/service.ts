import { AccountForm } from "./type";
import UtilityService from "../utility/service";
import AccountModel from "./model";

const AccountService = {
  save: async (userForm: AccountForm) => {
    let message = "";
    const error = {};
    const hashedPassword = await UtilityService.hashPassword(userForm.password);
    await AccountModel.save(userForm, hashedPassword);
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

  getInformation: () => {},

  update: () => {},

  delete: () => {},
};

export default AccountService;
