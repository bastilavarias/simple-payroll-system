import { DepartmentForm } from "./type";
import DepartmentModel from "./model";

const DepartmentService = {
  save: async (departmentForm: DepartmentForm) => {
    let message = "";
    const error = {};
    await DepartmentModel.save(departmentForm);
    message = "Department was successfully saved.";
    return {
      error,
      message,
    };
  },

  fetch: async () => {
    const error = {};
    const departments = await DepartmentModel.fetch();
    return {
      departments,
      error,
    };
  },

  getInformation: async (departmentID: number) => {
    const error = {};
    const gotDepartmentInformation = await DepartmentModel.getInformation(
      departmentID
    );
    return {
      information: gotDepartmentInformation,
      error,
    };
  },

  update: async (departmentID: number, departmentForm: DepartmentForm) => {
    const error = {};
    let message = "";
    await DepartmentModel.update(departmentID, departmentForm);
    message = "Department was successfully updated.";
    return {
      error,
      message,
    };
  },

  remove: async (departmentID: number) => {
    const error = {};
    let message = "Department was successfully removed.";
    await DepartmentModel.remove(departmentID);
    return {
      error,
      message,
    };
  },
};

export default DepartmentService;
