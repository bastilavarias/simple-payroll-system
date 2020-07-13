<template>
  <v-card flat color="transparent">
    <div class="d-flex justify-space-between">
      <div class="flex-grow-1"></div>
      <v-btn color="primary" rounded @click="openDepartmentForm"
        >Add New Department</v-btn
      >
    </div>
    <v-card-text>
      <v-data-table
        :headers="tableHeaders"
        :items="departments"
        :loading="isFetchDepartmentsStart"
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
        <template v-slot:item.name="{ item }">
          <span class="text-capitalize">{{ item.name }}</span>
        </template>
        <template v-slot:item.description="{ item }">
          <span class="text-capitalize">{{ item.description }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon color="secondary" @click="viewDepartment(item.id)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            icon
            color="error"
            @click="selectDepartmentIDForRemoval(item.id)"
          >
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <custom-alert-dialog
      :is-show.sync="isRemoveDepartmentAlertDialogShow"
      :is-loading="isRemoveDepartmentStart"
      :action="removeDepartment"
      color="error"
      title="Warning!"
      message="Removing this department is irreversible. click confirm to continue."
    ></custom-alert-dialog>
  </v-card>
</template>

<script>
import {
  FETCH_DEPARTMENTS,
  REMOVE_DEPARTMENT,
} from "../../store/types/department";
import CustomAlertDialog from "../../components/custom/AlertDialog";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";

const defaultTableHeaders = [
  {
    text: "Name",
    value: "name",
  },

  {
    text: "Description",
    value: "description",
  },

  {
    text: "Actions",
    value: "actions",
  },
];

export default {
  components: { CustomAlertDialog },
  data() {
    return {
      tableHeaders: defaultTableHeaders,
      isFetchDepartmentsStart: false,
      departments: [],
      keyword: "",
      isRemoveDepartmentStart: false,
      isRemoveDepartmentAlertDialogShow: false,
      selectedDepartmentIDForRemoval: null,
    };
  },

  methods: {
    openDepartmentForm() {
      this.$router.push({
        name: "department-form",
        params: { operation: "create" },
      });
    },

    async fetchDepartments() {
      this.isFetchDepartmentsStart = true;
      const { departments } = await this.$store.dispatch(FETCH_DEPARTMENTS);
      this.departments = departments;
      this.isFetchDepartmentsStart = false;
    },

    viewDepartment(departmentID) {
      this.$router.push({
        name: "department-form",
        params: { operation: "view", departmentID },
      });
    },

    selectDepartmentIDForRemoval(departmentID) {
      this.isRemoveDepartmentAlertDialogShow = true;
      this.selectedDepartmentIDForRemoval = departmentID;
    },

    async removeDepartment() {
      this.isRemoveDepartmentStart = true;
      const removeDepartmentMessage = await this.$store.dispatch(
        REMOVE_DEPARTMENT,
        this.selectedDepartmentIDForRemoval
      );
      if (removeDepartmentMessage) {
        this.isRemoveDepartmentAlertDialogShow = false;
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, removeDepartmentMessage);
        await this.fetchDepartments();
      }
      this.isRemoveDepartmentStart = false;
    },
  },

  async created() {
    await this.fetchDepartments();
  },
};
</script>
