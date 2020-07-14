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

  save: async (request: Request, response: Response) => {
    try {
      const employeeForm = {
        departmentID: request.body.departmentID
          ? parseInt(request.body.departmentID)
          : 0,
        designationID: request.body.designationID
          ? parseInt(request.body.designationID)
          : 0,
        profile: {
          firstName: request.body.profile.firstName
            ? request.body.profile.firstName
            : "",
          middleName: request.body.profile.middleName
            ? request.body.profile.middleName
            : "",
          lastName: request.body.profile.lastName
            ? request.body.profile.lastName
            : "",
          extensionName: request.body.profile.extensionName
            ? request.body.profile.extensionName
            : "",
          birthDate: request.body.profile.birthDate
            ? request.body.profile.birthDate
            : "",
          birthPlace: request.body.profile.birthPlace
            ? request.body.profile.birthPlace
            : "",
          sex: request.body.profile.sex ? request.body.profile.sex : "",
          citizenship: request.body.profile.citizenship
            ? request.body.profile.citizenship
            : "",
          civilStatus: request.body.profile.civilStatus
            ? request.body.profile.civilStatus
            : "",
          address: request.body.profile.address
            ? request.body.profile.address
            : "",
          contactNumber: request.body.profile.contactNumber
            ? request.body.profile.contactNumber
            : "",
          height: request.body.profile.height
            ? request.body.profile.height
            : "",
          weight: request.body.profile.weight
            ? request.body.profile.weight
            : "",
          bloodType: request.body.profile.bloodType
            ? request.body.profile.bloodType
            : "",
        },
        benefit: {
          gsisNumber: request.body.benefit.gsisNumber
            ? request.body.benefit.gsisNumber
            : "",
          pagIbigIDNumber: request.body.benefit.pagIbigIDNumber
            ? request.body.benefit.pagIbigIDNumber
            : "",
          philhealthNumber: request.body.benefit.philhealthNumber
            ? request.body.benefit.philhealthNumber
            : "",
          sssNumber: request.body.benefit.sssNumber
            ? request.body.benefit.sssNumber
            : "",
          tinNumber: request.body.benefit.tinNumber
            ? request.body.benefit.tinNumber
            : "",
          agencyEmployeeNumber: request.body.benefit.agencyEmployeeNumber
            ? request.body.benefit.agencyEmployeeNumber
            : "",
        },
      };
      const result = await EmployeeService.save(employeeForm);
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
      const result = await EmployeeService.fetch();
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
      const employeeID = request.params.employeeID
        ? parseInt(request.params.employeeID)
        : 0;
      const result = await EmployeeService.getInformation(employeeID);
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
      const employeeID = request.body.employeeID
        ? parseInt(request.body.employeeID)
        : 0;
      const employeeProfileID = request.body.employeeProfileID
        ? parseInt(request.body.employeeProfileID)
        : 0;
      const employeeBenefitID = request.body.employeeBenefitID
        ? parseInt(request.body.employeeBenefitID)
        : 0;
      const employeeForm = {
        departmentID: request.body.departmentID
          ? parseInt(request.body.departmentID)
          : 0,
        designationID: request.body.designationID
          ? parseInt(request.body.designationID)
          : 0,
        profile: {
          firstName: request.body.profile.firstName
            ? request.body.profile.firstName
            : "",
          middleName: request.body.profile.middleName
            ? request.body.profile.middleName
            : "",
          lastName: request.body.profile.lastName
            ? request.body.profile.lastName
            : "",
          extensionName: request.body.profile.extensionName
            ? request.body.profile.extensionName
            : "",
          birthDate: request.body.profile.birthDate
            ? request.body.profile.birthDate
            : "",
          birthPlace: request.body.profile.birthPlace
            ? request.body.profile.birthPlace
            : "",
          sex: request.body.profile.sex ? request.body.profile.sex : "",
          citizenship: request.body.profile.citizenship
            ? request.body.profile.citizenship
            : "",
          civilStatus: request.body.profile.civilStatus
            ? request.body.profile.civilStatus
            : "",
          address: request.body.profile.address
            ? request.body.profile.address
            : "",
          contactNumber: request.body.profile.contactNumber
            ? request.body.profile.contactNumber
            : "",
          height: request.body.profile.height
            ? request.body.profile.height
            : "",
          weight: request.body.profile.weight
            ? request.body.profile.weight
            : "",
          bloodType: request.body.profile.bloodType
            ? request.body.profile.bloodType
            : "",
        },
        benefit: {
          gsisNumber: request.body.benefit.gsisNumber
            ? request.body.benefit.gsisNumber
            : "",
          pagIbigIDNumber: request.body.benefit.pagIbigIDNumber
            ? request.body.benefit.pagIbigIDNumber
            : "",
          philhealthNumber: request.body.benefit.philhealthNumber
            ? request.body.benefit.philhealthNumber
            : "",
          sssNumber: request.body.benefit.sssNumber
            ? request.body.benefit.sssNumber
            : "",
          tinNumber: request.body.benefit.tinNumber
            ? request.body.benefit.tinNumber
            : "",
          agencyEmployeeNumber: request.body.benefit.agencyEmployeeNumber
            ? request.body.benefit.agencyEmployeeNumber
            : "",
        },
      };
      const result = await EmployeeService.update(
        employeeID,
        employeeProfileID,
        employeeBenefitID,
        employeeForm
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
      const employeeID = request.params.employeeID
        ? parseInt(request.params.employeeID)
        : 0;
      const result = await EmployeeService.remove(employeeID);
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
