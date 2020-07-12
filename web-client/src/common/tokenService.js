import jwtDecoder from "jwt-decode";

const tokenKey = "id_token";

const TokenService = {
  save: (token) => {
    window.localStorage.setItem(tokenKey, token);
  },

  get: () => {
    return window.localStorage.getItem(tokenKey)
      ? window.localStorage.getItem(tokenKey)
      : null;
  },

  remove: () => {
    window.localStorage.removeItem(tokenKey);
  },

  getDecodedToken: () => {
    const token = TokenService.get();
    if (token) {
      return jwtDecoder(token);
    }
    return {};
  },
};

export default TokenService;
