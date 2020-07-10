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

  {
    path: "/admin",
    component: () => import("../layouts/Admin"),
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
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
