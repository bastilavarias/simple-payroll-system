import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { GET_AUTHENTICATED_CREDENTIALS } from "../store/types/authentication";

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

  {
    path: "/admin",
    component: () => import("../layouts/Admin"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "employee-management",
        component: () => import("../pages/employee/Index.vue"),
        children: [
          {
            path: "",
            name: "employee-table",
            component: () => import("../pages/employee/Table.vue"),
            meta: {
              breadcrumbs: [
                {
                  text: "Employee Table",
                  icon: "mdi-table",
                  to: { name: "employee-table" },
                },
              ],
            },
          },

          {
            path: ":operation/:employeeID?",
            name: "employee-form",
            component: () => import("../pages/employee/Form"),
            meta: {
              breadcrumbs: [
                {
                  text: "Employee Table",
                  icon: "mdi-table",
                  to: { name: "employee-table" },
                },

                {
                  text: "Employee Form",
                  icon: "mdi-form-select",
                  to: { name: "employee-form" },
                },
              ],
            },
          },
        ],
      },

      {
        path: "department-management",
        component: () => import("../pages/department/Index.vue"),
        children: [
          {
            path: "",
            name: "department-table",
            component: () => import("../pages/department/Table.vue"),
            meta: {
              breadcrumbs: [
                {
                  text: "Department Table",
                  icon: "mdi-table",
                  to: { name: "department-table" },
                },
              ],
            },
          },

          {
            path: ":operation/:departmentID?",
            name: "department-form",
            component: () => import("../pages/department/Form"),
            meta: {
              breadcrumbs: [
                {
                  text: "Department Table",
                  icon: "mdi-table",
                  to: { name: "department-table" },
                },

                {
                  text: "Department Form",
                  icon: "mdi-form-select",
                  to: { name: "department-form" },
                },
              ],
            },
          },
        ],
      },

      {
        path: "designation-management",
        component: () => import("../pages/designation/Index.vue"),
        children: [
          {
            path: "",
            name: "designation-table",
            component: () => import("../pages/designation/Table.vue"),
            meta: {
              breadcrumbs: [
                {
                  text: "Designation Table",
                  icon: "mdi-table",
                  to: { name: "designation-table" },
                },
              ],
            },
          },

          {
            path: ":operation/:designationID?",
            name: "designation-form",
            component: () => import("../pages/designation/Form"),
            meta: {
              breadcrumbs: [
                {
                  text: "Designation Table",
                  icon: "mdi-table",
                  to: { name: "designation-table" },
                },

                {
                  text: "Designation Form",
                  icon: "mdi-form-select",
                  to: { name: "designation-form" },
                },
              ],
            },
          },
        ],
      },

      {
        path: "payroll",
        name: "payroll",
        component: () => import("../pages/Payroll"),
      },

      {
        path: "report",
        name: "report",
        component: () => import("../pages/Report"),
      },

      {
        path: "account-management",
        component: () => import("../pages/account/Index.vue"),
        children: [
          {
            path: "",
            name: "account-table",
            component: () => import("../pages/account/Table.vue"),
            meta: {
              breadcrumbs: [
                {
                  text: "Account Table",
                  icon: "mdi-table",
                  to: { name: "account-table" },
                },
              ],
            },
          },

          {
            path: ":operation/:accountID?",
            name: "account-form",
            component: () => import("../pages/account/Form"),
            meta: {
              breadcrumbs: [
                {
                  text: "Account Table",
                  icon: "mdi-table",
                  to: { name: "account-table" },
                },

                {
                  text: "Account Form",
                  icon: "mdi-form-select",
                  to: { name: "account-form" },
                },
              ],
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  await store.dispatch(GET_AUTHENTICATED_CREDENTIALS);
  const authentication = store.state.authentication;
  const credentials = authentication.credentials;
  const isAuthenticated = authentication.isAuthenticated;
  const redirectTo =
    credentials.actions.length > 0
      ? credentials.actions[0].to
      : { name: "login" };
  const isProtectedRoute = to.matched.some(
    (record) => record.meta.requiresAuth
  );
  if (isProtectedRoute && !isAuthenticated) return next({ name: "login" });
  if (to.name === "login" && isAuthenticated) return next(redirectTo);
  next();
});

export default router;
