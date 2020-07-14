import ApiService from "../common/apiService";

const EmployeeHTTP = {
  generateCustomID: async () => ApiService.get("/employee/custom/employee-id"),
  save: async (employeeForm) => ApiService.post("/employee", employeeForm),
  fetch: async () => ApiService.get("/employee"),
  getInformation: async (employeeID) =>
    ApiService.get(`/employee/${employeeID}`),
  update: async (employeeForm) => ApiService.put("/employee", employeeForm),
  remove: async (designationID) =>
    ApiService.delete(`/employee/${designationID}`),
};

export default EmployeeHTTP;
