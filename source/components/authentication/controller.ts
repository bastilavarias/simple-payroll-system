import { Request, Response } from "express";
import AuthenticationService from "./service";
import UtilityService from "../utility/service";
import { Token } from "./type";

const AuthenticationController = {
  login: async (request: Request, response: Response) => {
    try {
      const loginFormClientInput = {
        username: request.body.username ? request.body.username.trim() : "",
        password: request.body.password ? request.body.password : "",
      };
      const result = await AuthenticationService.login(loginFormClientInput);
      if (UtilityService.checkErrorIfValid(result.error)) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  getAuthenticatedCredentials: async (request: Request, response: Response) => {
    try {
      // @ts-ignore
      const token: Token = request.user;
      const result = await AuthenticationService.getAuthenticatedCredentials(
        token
      );
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default AuthenticationController;
