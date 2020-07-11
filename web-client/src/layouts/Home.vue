<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-toolbar-title>
        <v-icon class="mr-1" large>mdi-file</v-icon>
        <span>
          KRSW Agency
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-for="(route, index) in toolbarRoutes">
        <v-btn :key="index" :to="route.to" exact color="primary" depressed>{{
          route.text
        }}</v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="6" xl="4">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      toolbarRoutes: [{ text: "Login", to: { name: "login" } }],
    };
  },
};
</script>
