import { Response, Request } from "express";
import DesignationService from "./service";

const DesignationController = {
  save: async (request: Request, response: Response) => {
    try {
      const designationForm = {
        name: request.body.name ? request.body.name : "",
        description: request.body.description ? request.body.description : "",
        dailySalary: request.body.dailySalary
          ? parseFloat(request.body.dailySalary)
          : 0.0,
      };
      const result = await DesignationService.save(designationForm);
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
      const result = await DesignationService.fetch();
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
      const designationID = request.params.designationID
        ? parseInt(request.params.designationID)
        : 0;
      const result = await DesignationService.getInformation(designationID);
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
      const designationID = request.body.designationID
        ? parseInt(request.body.designationID)
        : 0;
      const designationForm = {
        name: request.body.name ? request.body.name : "",
        description: request.body.description ? request.body.description : "",
        dailySalary: request.body.dailySalary
          ? parseFloat(request.body.dailySalary)
          : 0.0,
      };
      const result = await DesignationService.update(
        designationID,
        designationForm
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
      const designationID = request.params.designationID
        ? parseInt(request.params.designationID)
        : 0;
      const result = await DesignationService.remove(designationID);
      if (Object.keys(result.error).length > 0) throw result.error;
      delete result.error;
      response.status(200).json(result);
    } catch (error) {
      console.log(error);
      response.status(400).json(error);
    }
  },
};

export default DesignationController;
