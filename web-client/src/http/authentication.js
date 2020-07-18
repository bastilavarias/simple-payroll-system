import ApiService from "../common/apiService";

const AuthenticationService = {
  login: async ({ username, password }) =>
    ApiService.post("/authentication", { username, password }),
  getAuthenticatedCredentials: async () => ApiService.get("/authentication"),
};

export default AuthenticationService;
