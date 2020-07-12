import ApiService from "../common/apiService";

const AccountHTTP = {
  save: async ({ name, username, password }) =>
    ApiService.post("/account", { name, username, password }),
  fetch: async () => ApiService.get("/account"),
  getInformation: async (accountID) => ApiService.get(`/account/${accountID}`),
  update: async ({ name, username, password }) =>
    ApiService.put("/account", { name, username, password }),
  remove: async (accountID) => ApiService.delete(`/account/${accountID}`),
};

export default AccountHTTP;
