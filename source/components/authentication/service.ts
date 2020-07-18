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
    const signedJWT = jwt.sign(
      JSON.parse(JSON.stringify({ account: gotAccountInformation })),
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
    const gotAccountInformation = await AccountModel.getInformationByUsername(
      account.username
    );
    delete gotAccountInformation.password;
    const signedJWT = jwt.sign(
      JSON.parse(JSON.stringify({ account: gotAccountInformation })),
      <string>process.env.AUTH_SECRET_OR_KEY
    );
    const bearerToken = `Bearer ${signedJWT}`;
    return {
      token: bearerToken,
    };
  },
};

export default AuthenticationService;
