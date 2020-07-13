import {
  FETCH_DESIGNATIONS,
  GET_DESIGNATION_INFORMATION,
  REMOVE_DESIGNATION,
  SAVE_DESIGNATION,
  UPDATE_DESIGNATION,
} from "../types/designation";
import DesignationHTTP from "../../http/designation";

const DesignationStoreModule = {
  actions: {
    [SAVE_DESIGNATION]: async (context, { name, description, dailySalary }) => {
      try {
        const result = await DesignationHTTP.save({
          name,
          description,
          dailySalary,
        });
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [FETCH_DESIGNATIONS]: async (context) => {
      try {
        const result = await DesignationHTTP.fetch();
        const { designations } = result.data;
        return { designations };
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [GET_DESIGNATION_INFORMATION]: async (context, designationID) => {
      try {
        const result = await DesignationHTTP.getInformation(designationID);
        const { information } = result.data;
        return information;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [UPDATE_DESIGNATION]: async (
      context,
      { designationID, name, description, dailySalary }
    ) => {
      try {
        const result = await DesignationHTTP.update({
          designationID,
          name,
          description,
          dailySalary,
        });
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [REMOVE_DESIGNATION]: async (context, designationID) => {
      try {
        const result = await DesignationHTTP.remove(designationID);
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
  },
};

export default DesignationStoreModule;
