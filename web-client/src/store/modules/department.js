import {
  FETCH_DEPARTMENTS,
  GET_DEPARTMENT_INFORMATION,
  REMOVE_DEPARTMENT,
  SAVE_DEPARTMENT,
  UPDATE_DEPARTMENT,
} from "../types/department";
import DepartmentHTTP from "../../http/department";

const DepartmentStoreModule = {
  actions: {
    [SAVE_DEPARTMENT]: async (context, { name, description }) => {
      try {
        const result = await DepartmentHTTP.save({ name, description });
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [FETCH_DEPARTMENTS]: async (context) => {
      try {
        const result = await DepartmentHTTP.fetch();
        const { departments } = result.data;
        return { departments };
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [GET_DEPARTMENT_INFORMATION]: async (context, departmentID) => {
      try {
        const result = await DepartmentHTTP.getInformation(departmentID);
        const { information } = result.data;
        return information;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [UPDATE_DEPARTMENT]: async (
      context,
      { departmentID, name, description }
    ) => {
      try {
        const result = await DepartmentHTTP.update({
          departmentID,
          name,
          description,
        });
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [REMOVE_DEPARTMENT]: async (context, departmentID) => {
      try {
        const result = await DepartmentHTTP.remove(departmentID);
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
  },
};

export default DepartmentStoreModule;
