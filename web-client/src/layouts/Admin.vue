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
      <v-btn exact color="primary" depressed>Logout</v-btn>
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
              Admin Name
            </v-list-item-title>
            <v-list-item-subtitle class="text-capitalize"
              >Administrator</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <template v-for="(action, index) in actions">
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
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const defaultActions = [
  {
    text: "Employees",
    icon: "mdi-account-multiple",
    to: { name: "employee-table" },
  },

  {
    text: "Departments",
    icon: "mdi-account-multiple",
    to: { name: "department-table" },
  },
];

export default {
  data() {
    return {
      actions: defaultActions,
    };
  },
};
</script>
