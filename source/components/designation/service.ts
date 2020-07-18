import { DesignationForm } from "./type";
import DesignationModel from "./model";

const DesignationService = {
  save: async (designationForm: DesignationForm) => {
    let message = "";
    const error = {};
    await DesignationModel.save(designationForm);
    message = "Designation was successfully saved.";
    return {
      error,
      message,
    };
  },

  fetch: async () => {
    const error = {};
    const designations = await DesignationModel.fetch();
    return {
      designations,
      error,
    };
  },

  getInformation: async (designationID: number) => {
    const error = {};
    const gotDesignationInformation = await DesignationModel.getInformation(
      designationID
    );
    return {
      information: gotDesignationInformation,
      error,
    };
  },

  update: async (designationID: number, designationForm: DesignationForm) => {
    const error = {};
    let message = "";
    await DesignationModel.update(designationID, designationForm);
    message = "Designation was successfully updated.";
    return {
      error,
      message,
    };
  },

  remove: async (designationID: number) => {
    const error = {};
    let message = "Designation was successfully removed.";
    await DesignationModel.remove(designationID);
    return {
      error,
      message,
    };
  },
};

export default DesignationService;
