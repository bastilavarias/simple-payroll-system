import ApiService from "../common/apiService";

const AccountHTTP = {
  save: async ({ name, username, password, type }) =>
    ApiService.post("/account", { name, username, password, type }),
  fetch: async () => ApiService.get("/account"),
  getInformation: async (accountID) => ApiService.get(`/account/${accountID}`),
  update: async ({ accountID, name, username, password }) =>
    ApiService.put("/account", { accountID, name, username, password }),
  remove: async (accountID) => ApiService.delete(`/account/${accountID}`),
};

export default AccountHTTP;
