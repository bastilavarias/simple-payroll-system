import {
  FETCH_EMPLOYEES,
  GENERATE_EMPLOYEE_CUSTOM_ID,
  GET_EMPLOYEE_INFORMATION,
  REMOVE_EMPLOYEE,
  SAVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../types/employee";
import EmployeeHTTP from "../../http/employee";

const EmployeeStoreModule = {
  actions: {
    [GENERATE_EMPLOYEE_CUSTOM_ID]: async (context) => {
      try {
        const result = await EmployeeHTTP.generateCustomID();
        const { customID } = result.data;
        return { customID };
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [SAVE_EMPLOYEE]: async (context, employeeForm) => {
      try {
        const result = await EmployeeHTTP.save(employeeForm);
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [FETCH_EMPLOYEES]: async (context) => {
      try {
        const result = await EmployeeHTTP.fetch();
        const { employees } = result.data;
        return { employees };
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [GET_EMPLOYEE_INFORMATION]: async (context, employeeID) => {
      try {
        const result = await EmployeeHTTP.getInformation(employeeID);
        const { information } = result.data;
        return information;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [UPDATE_EMPLOYEE]: async (context, employeeForm) => {
      try {
        const result = await EmployeeHTTP.update(employeeForm);
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [REMOVE_EMPLOYEE]: async (context, employeeID) => {
      try {
        const result = await EmployeeHTTP.remove(employeeID);
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
  },
};

export default EmployeeStoreModule;
