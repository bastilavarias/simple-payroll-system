<template>
  <section>
    <v-card color="transparent" flat>
      <v-card-title class="display-1 font-weight-bold"
        >Manage Employees</v-card-title
      >
      <v-card-subtitle
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
        voluptatum.</v-card-subtitle
      >
      <v-card-text>
        <custom-breadcrumbs :routes="breadcrumbRoutes"></custom-breadcrumbs>
      </v-card-text>
      <router-view></router-view>
    </v-card>
  </section>
</template>
<script>
import CustomBreadcrumbs from "../../components/custom/Breadcrumbs";
export default {
  components: { CustomBreadcrumbs },
  computed: {
    breadcrumbRoutes() {
      const routes = this.$route.meta.breadcrumbs;
      return routes ? routes : [];
    },
  },
};
</script>
