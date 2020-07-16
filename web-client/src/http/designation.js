import ApiService from "../common/apiService";

const DesignationHTTP = {
  save: async ({ name, description, dailySalary }) =>
    ApiService.post("/designation", { name, description, dailySalary }),
  fetch: async () => ApiService.get("/designation"),
  getInformation: async (designationID) =>
    ApiService.get(`/designation/${designationID}`),
  update: async ({ designationID, name, description, dailySalary }) =>
    ApiService.put("/designation", {
      designationID,
      name,
      description,
      dailySalary,
    }),
  remove: async (designationID) =>
    ApiService.delete(`/designation/${designationID}`),
};

export default DesignationHTTP;
