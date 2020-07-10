import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("../layouts/Home"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("../pages/Login"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
