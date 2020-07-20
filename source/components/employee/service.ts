import HelperModel from "../helper/model";
import { EmployeeForm } from "./type";
import EmployeeModel from "./model";

const EmployeeService = {
  generateCustomID: async () => {
    const error = {};
    const gotAccountTableRowsCount = await HelperModel.countTableRows(
      `employee`
    );
    const formattedCustomID = EmployeeService.formatCustomID(
      gotAccountTableRowsCount + 1
    );
    const generatedCustomID = formattedCustomID
      ? formattedCustomID
      : "ACCOUNT-00000";
    return {
      customID: generatedCustomID,
      error,
    };
  },

  save: async (employeeForm: EmployeeForm) => {
    let message = "";
    const error = {};
    const savedEmployeeProfileID = await EmployeeModel.saveProfile(
      employeeForm.profile
    );
    const savedEmployeeBenefitID = await EmployeeModel.saveBenefit(
      employeeForm.benefit
    );
    const { customID } = await EmployeeService.generateCustomID();
    await EmployeeModel.save(
      employeeForm,
      customID,
      savedEmployeeProfileID,
      savedEmployeeBenefitID
    );
    message = "Employee was successfully saved.";
    return {
      message,
      error,
    };
  },

  fetch: async () => {
    const error = {};
    const employees = await EmployeeModel.fetch();
    return {
      error,
      employees,
    };
  },

  getInformation: async (employeeID: number) => {
    const error = {};
    const information = await EmployeeModel.getInformation(employeeID);
    return {
      error,
      information,
    };
  },

  update: async (
    employeeID: number,
    employeeProfileID: number,
    employeeBenefitID: number,
    employeeForm: EmployeeForm
  ) => {
    let message = "";
    const error = {};
    await EmployeeModel.updateProfile(employeeProfileID, employeeForm.profile);
    await EmployeeModel.updateBenefit(employeeBenefitID, employeeForm.benefit);
    await EmployeeModel.update(employeeID, employeeForm);
    message = "Employee was successfully updated.";
    return {
      message,
      error,
    };
  },

  remove: async (employeeID: number) => {
    const error = {};
    let message = "";
    await EmployeeModel.remove(employeeID);
    message = "Employee was successfully removed.";
    return {
      error,
      message,
    };
  },

  formatCustomID: (tableRowsCount: number): string => {
    let lastPart = "";
    if (tableRowsCount >= 0 && tableRowsCount <= 9)
      lastPart = `0000${tableRowsCount}`;
    if (tableRowsCount >= 10 && tableRowsCount <= 99)
      lastPart = `000${tableRowsCount}`;
    if (tableRowsCount >= 100 && tableRowsCount <= 999)
      lastPart = `00${tableRowsCount}`;
    if (tableRowsCount >= 1000 && tableRowsCount <= 9999)
      lastPart = `0${tableRowsCount}`;
    if (tableRowsCount >= 10000) lastPart = `${tableRowsCount}`;
    return `ACCOUNT-${lastPart}`;
  },
};

export default EmployeeService;
