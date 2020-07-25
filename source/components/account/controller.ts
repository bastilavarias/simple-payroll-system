import { Response, Request } from "express";
import AccountService from "./service";
import UtilityService from "../utility/service";

const AccountController = {
  save: async (request: Request, response: Response) => {
    try {
      const accountForm = {
        name: request.body.name ? request.body.name : "",
        username: request.body.username ? request.body.username : "",
        password: request.body.password ? request.body.password : "",
        type: request.body.type ? request.body.type : "Staff",
      };
      const result = await AccountService.save(accountForm);
      if (UtilityService.checkErrorIfValid(result.error)) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  fetch: async (request: Request, response: Response) => {
    try {
      const result = await AccountService.fetch();
      if (Object.keys(result.error).length > 0) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  getInformation: async (request: Request, response: Response) => {
    try {
      const accountID = request.params.accountID
        ? parseInt(request.params.accountID)
        : 0;
      const result = await AccountService.getInformation(accountID);
      if (Object.keys(result.error).length > 0) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  update: async (request: Request, response: Response) => {
    try {
      const accountID = request.body.accountID
        ? parseInt(request.body.accountID)
        : 0;
      const accountForm = {
        name: request.body.name ? request.body.name : "",
        username: request.body.username ? request.body.username : "",
        password: request.body.password ? request.body.password : "",
        type: request.body.type ? request.body.type : "",
      };
      const result = await AccountService.update(accountID, accountForm);
      if (Object.keys(result.error).length > 0) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },

  remove: async (request: Request, response: Response) => {
    try {
      const accountID = request.params.accountID
        ? parseInt(request.params.accountID)
        : 0;
      const result = await AccountService.remove(accountID);
      if (Object.keys(result.error).length > 0) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default AccountController;
