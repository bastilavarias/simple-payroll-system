import { Response, Request } from "express";
import EmployeeService from "./service";

const EmployeeController = {
  generateCustomID: async (request: Request, response: Response) => {
    try {
      const result = await EmployeeService.generateCustomID();
      if (Object.keys(result.error).length > 0) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default EmployeeController;
