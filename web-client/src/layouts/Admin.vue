<template>
  <v-app>
    <v-app-bar app color="primary" dark flat clipped-left>
      <v-toolbar-title>
        <v-icon class="mr-1" large>mdi-file</v-icon>
        <span>
          KRSW Agency
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn exact color="primary" depressed @click="logout">Logout</v-btn>
    </v-app-bar>
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img
              src="../assets/icons8/admin.png"
              lazy-src="../assets/icons8/admin.png"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-capitalize font-weight-bold">
              {{ credentials.account.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-capitalize">{{
              credentials.account.type
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <template v-for="(action, index) in credentials.actions">
          <v-list-item
            active-class="primary white--text"
            :key="index"
            :to="action.to"
          >
            <v-list-item-icon>
              <v-icon>
                {{ action.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{ action.text }}
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view></router-view>
        <custom-global-notification-snackbar></custom-global-notification-snackbar>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CustomGlobalNotificationSnackbar from "../components/custom/GlobalNotificationSnackbar";
import { PURGE_AUTHENTICATION } from "../store/types/authentication";
const defaultActions = [
  {
    text: "Employees",
    icon: "mdi-account-tie",
    to: { name: "employee-table" },
  },

  {
    text: "Departments",
    icon: "mdi-dock-window",
    to: { name: "department-table" },
  },

  {
    text: "Designations",
    icon: "mdi-briefcase-account",
    to: { name: "designation-table" },
  },

  {
    text: "Payroll",
    icon: "mdi-database",
    to: { name: "payroll" },
  },

  {
    text: "Report",
    icon: "mdi-file-chart",
    to: { name: "report" },
  },

  {
    text: "Accounts",
    icon: "mdi-account-multiple",
    to: { name: "account-table" },
  },
];

export default {
  components: { CustomGlobalNotificationSnackbar },

  computed: {
    credentials() {
      return this.$store.state.authentication.credentials;
    },
  },

  methods: {
    async logout() {
      await this.$store.commit(PURGE_AUTHENTICATION);
      await this.$router.push({ name: "login" });
    },
  },
};
</script>
