import { Response, Request } from "express";
import AccountService from "./service";

const AccountController = {
  save: async (request: Request, response: Response) => {
    try {
      const accountForm = {
        name: request.body.name ? request.body.name : "",
        username: request.body.username ? request.body.username : "",
        password: request.body.password ? request.body.password : "",
      };
      const result = await AccountService.save(accountForm);
      if (Object.keys(result.error).length > 0) throw result.error;
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
};

export default AccountController;
