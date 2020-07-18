import { Response, Request } from "express";
import DepartmentService from "./service";

const DepartmentController = {
  save: async (request: Request, response: Response) => {
    try {
      const departmentForm = {
        name: request.body.name ? request.body.name : "",
        description: request.body.description ? request.body.description : "",
      };
      const result = await DepartmentService.save(departmentForm);
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
      const result = await DepartmentService.fetch();
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
      const departmentID = request.params.departmentID
        ? parseInt(request.params.departmentID)
        : 0;
      const result = await DepartmentService.getInformation(departmentID);
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
      const departmentID = request.body.departmentID
        ? parseInt(request.body.departmentID)
        : 0;
      const departmentForm = {
        name: request.body.name ? request.body.name : "",
        description: request.body.description ? request.body.description : "",
      };
      const result = await DepartmentService.update(
        departmentID,
        departmentForm
      );
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
      const departmentID = request.params.departmentID
        ? parseInt(request.params.departmentID)
        : 0;
      const result = await DepartmentService.remove(departmentID);
      if (Object.keys(result.error).length > 0) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default DepartmentController;
