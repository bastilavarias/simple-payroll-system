<template>
  <v-card flat color="transparent">
    <div class="d-flex justify-space-between">
      <div class="flex-grow-1"></div>
      <v-btn color="primary" rounded @click="openDepartmentForm"
        >Add New Employee</v-btn
      >
    </div>
    <v-card-text>
      <v-data-table
        :headers="tableHeaders"
        :items="employees"
        :loading="isFetchEmployeesStart"
        :search="keyword"
      >
        <template v-slot:top>
          <v-text-field
            label="Search here"
            single-line
            outlined
            append-icon="mdi-magnify"
            v-model="keyword"
          ></v-text-field>
        </template>
        <template v-slot:item.customID="{ item }">
          <span class="font-weight-bold">{{ item.customID }}</span>
        </template>
        <template v-slot:item.profile.lastName="{ item }">
          <span class="text-capitalize">{{
            formatFullName(item.profile)
          }}</span>
        </template>
        <template v-slot:item.department="{ item }">
          <span class="text-capitalize">{{ item.department.name }}</span>
        </template>
        <template v-slot:item.designation="{ item }">
          <span class="text-capitalize">{{ item.designation.name }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon color="secondary" @click="viewEmployee(item.id)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            icon
            color="error"
            @click="selectEmployeeIDForRemoval(item.id)"
          >
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <custom-alert-dialog
      :is-show.sync="isRemoveEmployeeAlertDialogShow"
      :is-loading="isRemoveEmployeeStart"
      :action="removeEmployee"
      color="error"
      title="Warning!"
      message="Removing this employee is irreversible. click confirm to continue."
    ></custom-alert-dialog>
  </v-card>
</template>

<script>
import { FETCH_EMPLOYEES, REMOVE_EMPLOYEE } from "../../store/types/employee";
import CustomAlertDialog from "../../components/custom/AlertDialog";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";
import Utilities from "../../common/utilities";

const defaultTableHeaders = [
  {
    text: "Employee ID",
    value: "customID",
  },

  {
    text: "Name",
    value: "profile.lastName",
  },

  {
    text: "Department",
    value: "department",
  },

  {
    text: "Designation",
    value: "designation",
  },

  {
    text: "Actions",
    value: "actions",
  },
];

export default {
  components: { CustomAlertDialog },

  mixins: [Utilities],

  data() {
    return {
      tableHeaders: defaultTableHeaders,
      isFetchEmployeesStart: false,
      employees: [],
      keyword: "",
      isRemoveEmployeeStart: false,
      isRemoveEmployeeAlertDialogShow: false,
      selectedEmployeeIDForRemoval: null,
    };
  },

  methods: {
    openDepartmentForm() {
      this.$router.push({
        name: "employee-form",
        params: { operation: "create" },
      });
    },

    async fetchEmployees() {
      this.isFetchEmployeesStart = true;
      const { employees } = await this.$store.dispatch(FETCH_EMPLOYEES);
      this.employees = employees;
      this.isFetchEmployeesStart = false;
    },

    viewEmployee(employeeID) {
      this.$router.push({
        name: "employee-form",
        params: { operation: "view", employeeID },
      });
    },

    selectEmployeeIDForRemoval(employeeID) {
      this.isRemoveEmployeeAlertDialogShow = true;
      this.selectedEmployeeIDForRemoval = employeeID;
    },

    async removeEmployee() {
      this.isRemoveEmployeeStart = true;
      const removeEmployeeMessage = await this.$store.dispatch(
        REMOVE_EMPLOYEE,
        this.selectedEmployeeIDForRemoval
      );
      if (removeEmployeeMessage) {
        this.isRemoveEmployeeAlertDialogShow = false;
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, removeEmployeeMessage);
        await this.fetchEmployees();
      }
      this.isRemoveEmployeeStart = false;
    },
  },

  async created() {
    await this.fetchEmployees();
  },
};
</script>
