import ApiService from "../common/apiService";

const DepartmentHTTP = {
  save: async ({ name, description }) =>
    ApiService.post("/department", { name, description }),
  fetch: async () => ApiService.get("/department"),
  getInformation: async (departmentID) =>
    ApiService.get(`/department/${departmentID}`),
  update: async ({ departmentID, name, description }) =>
    ApiService.put("/department", { departmentID, name, description }),
  remove: async (departmentID) =>
    ApiService.delete(`/department/${departmentID}`),
};

export default DepartmentHTTP;
