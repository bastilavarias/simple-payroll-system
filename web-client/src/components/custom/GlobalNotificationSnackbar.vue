<template>
  <v-snackbar v-model="isShow" :timeout="-1">
    {{ message }}
    <template>
      <v-btn
        color="success"
        text
        right
        @click="closeNotification"
        class="text-capitalize"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { CLEAR_GLOBAL_NOTIFICATION } from "../../store/types/global";
export default {
  name: "custom-global-notification-snackbar",
  computed: {
    isShow() {
      const isShow = this.$store.state.global.isNotificationShow;
      return isShow ? isShow : false;
    },
    message() {
      const message = this.$store.state.global.notificationMessage;
      return message ? message : "";
    },
  },
  watch: {
    isShow(val) {
      if (val) {
        setTimeout(() => this.closeNotification(), 2000);
      }
    },
  },
  methods: {
    closeNotification() {
      this.$store.commit(CLEAR_GLOBAL_NOTIFICATION);
    },
  },
};
</script>
