import {
  CLEAR_GLOBAL_NOTIFICATION,
  SHOW_GLOBAL_NOTIFICATION,
} from "../types/global";

const GlobalStoreModule = {
  state: {
    isNotificationShow: false,
    notificationMessage: "",
  },

  mutations: {
    [SHOW_GLOBAL_NOTIFICATION]: (state, message) => {
      state.isNotificationShow = true;
      state.notificationMessage = message;
    },

    [CLEAR_GLOBAL_NOTIFICATION]: (state) => {
      state.isNotificationShow = false;
      state.notificationMessage = "";
    },
  },
};

export default GlobalStoreModule;
