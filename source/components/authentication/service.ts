import * as dotenv from "dotenv";
dotenv.config();
import { LoginForm } from "./type";
import AccountModel from "../account/model";
import UtilityService from "../utility/service";
import jwt from "jsonwebtoken";
import { Token } from "./type";

const AuthenticationService = {
  login: async (loginFormClientInput: LoginForm) => {
    let bearerToken = "";
    const error = { username: "", password: "" };
    const gotAccountInformation = await AccountModel.getInformationByUsername(
      loginFormClientInput.username
    );
    const isUsernameFound = Object.keys(gotAccountInformation).length > 0;
    if (!isUsernameFound) {
      error.username = "Username not found.";
      return {
        token: bearerToken,
        error,
      };
    }
    const isPasswordValid = await UtilityService.compareHashPassword(
      loginFormClientInput.password,
      gotAccountInformation.password
    );
    if (!isPasswordValid) {
      error.password = "Invalid password.";
      return {
        token: bearerToken,
        error,
      };
    }
    delete gotAccountInformation.password;
    const gotAccountActions = AuthenticationService.getAccountActions(
      gotAccountInformation.type
    );
    const signedJWT = jwt.sign(
      JSON.parse(
        JSON.stringify({
          account: gotAccountInformation,
          actions: gotAccountActions,
        })
      ),
      <string>process.env.AUTH_SECRET_OR_KEY
    );
    bearerToken = `Bearer ${signedJWT}`;
    return {
      token: bearerToken,
      error,
    };
  },

  getAuthenticatedCredentials: async (token: Token) => {
    const { account } = token;
    const gotAccountInformation = await AccountModel.getInformation(account.id);
    delete gotAccountInformation.password;
    const gotAccountActions = AuthenticationService.getAccountActions(
      gotAccountInformation.type
    );
    const signedJWT = jwt.sign(
      JSON.parse(
        JSON.stringify({
          account: gotAccountInformation,
          actions: gotAccountActions,
        })
      ),
      <string>process.env.AUTH_SECRET_OR_KEY
    );
    const bearerToken = `Bearer ${signedJWT}`;
    return {
      token: bearerToken,
    };
  },

  getAccountActions: (accountType: string) => {
    let actions = [];
    const staffActions = [
      {
        text: "Payroll",
        icon: "mdi-database",
        to: { name: "payroll" },
      },

      {
        text: "Report",
        icon: "mdi-file-chart",
        to: { name: "report" },
      },
    ];
    switch (accountType) {
      case "Staff":
        actions = staffActions;
        break;

      case "Administrator":
        actions = [
          {
            text: "Employees",
            icon: "mdi-account-tie",
            to: { name: "employee-table" },
          },

          {
            text: "Departments",
            icon: "mdi-dock-window",
            to: { name: "department-table" },
          },

          {
            text: "Designations",
            icon: "mdi-briefcase-account",
            to: { name: "designation-table" },
          },

          {
            text: "Accounts",
            icon: "mdi-account-multiple",
            to: { name: "account-table" },
          },

          ...staffActions,
        ];
        break;

      default:
        actions = staffActions;
        break;
    }
    return actions;
  },
};

export default AuthenticationService;
