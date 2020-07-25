import AuthenticationService from "../../http/authentication";
import {
  CLEAR_AUTHENTICATION_ERROR,
  GET_AUTHENTICATED_CREDENTIALS,
  AUTHENTICATION_LOGIN,
  PURGE_AUTHENTICATION,
  SET_AUTHENTICATION_ERROR,
  SET_AUTHENTICATION_TOKEN,
} from "../types/authentication";
import tokenService from "../../common/tokenService";
import ApiService from "../../common/apiService";

const defaultError = {
  username: "",
  password: "",
};

const defaultCredentials = {
  account: {
    id: null,
    username: "",
    name: "",
  },
  actions: [],
};

const AuthenticationStoreModule = {
  state: {
    error: Object.assign({}, defaultError),
    isAuthenticated: !!tokenService.get(),
    credentials: Object.assign({}, defaultCredentials),
  },

  mutations: {
    [SET_AUTHENTICATION_ERROR]: (state, error) =>
      (state.error = Object.assign({}, error)),

    [SET_AUTHENTICATION_TOKEN]: (state, token) => {
      state.isAuthenticated = true;
      tokenService.save(token);
      state.credentials = tokenService.getDecodedToken();
      ApiService.setHeader();
    },

    [PURGE_AUTHENTICATION]: (state) => {
      state.isAuthenticated = false;
      state.credentials = Object.assign({}, defaultCredentials);
      tokenService.remove();
    },

    [CLEAR_AUTHENTICATION_ERROR]: (state) =>
      (state.error = Object.assign({}, defaultError)),
  },

  actions: {
    [AUTHENTICATION_LOGIN]: async ({ commit }, { username, password }) => {
      try {
        const result = await AuthenticationService.login({
          username,
          password,
        });
        const { token } = result.data;
        commit(SET_AUTHENTICATION_TOKEN, token);
      } catch (error) {
        commit(SET_AUTHENTICATION_ERROR, error.response.data);
      }
    },

    [GET_AUTHENTICATED_CREDENTIALS]: async ({ commit }) => {
      if (tokenService.get()) {
        ApiService.setHeader();
        try {
          const result = await AuthenticationService.getAuthenticatedCredentials();
          const { token } = result.data;
          commit(SET_AUTHENTICATION_TOKEN, token);
        } catch (error) {
          throw new Error(`[RWV] ApiService ${error}`);
        }
      } else {
        commit(PURGE_AUTHENTICATION);
      }
    },
  },
};

export default AuthenticationStoreModule;
