<template>
  <v-card flat color="transparent">
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            label="Name"
            v-model="form.name"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Description"
            v-model="form.description"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        color="primary"
        :disabled="!isFormValid"
        :loading="isSaveDepartmentStart"
        @click="saveDepartment"
        v-if="!isViewMode"
      >
        <span class="mr-1">Save Department</span>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <v-btn
        color="secondary"
        :disabled="!isFormValid"
        :loading="isUpdateDepartmentStart"
        @click="updateDepartment"
        v-if="isViewMode"
      >
        <span class="mr-1">Update Department</span>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  GET_DEPARTMENT_INFORMATION,
  SAVE_DEPARTMENT,
  UPDATE_DEPARTMENT,
} from "../../store/types/department";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";
import CustomPasswordField from "../../components/custom/PasswordField";

const defaultForm = {
  name: "",
  description: "",
};

export default {
  components: { CustomPasswordField },
  data() {
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
      isSaveDepartmentStart: false,
      isUpdateDepartmentStart: false,
    };
  },

  computed: {
    isFormValid() {
      const { name, description } = this.form;
      return name && description;
    },

    operation() {
      return this.$route.params.operation;
    },

    departmentID() {
      const id = this.$route.params.departmentID;
      return id ? id : 0;
    },

    isViewMode() {
      return this.operation === "view";
    },
  },

  methods: {
    async saveDepartment() {
      this.isSaveDepartmentStart = true;
      const payload = {
        name: this.form.name ? this.form.name : "",
        description: this.form.description ? this.form.description : "",
      };
      const saveDepartmentMessage = await this.$store.dispatch(
        SAVE_DEPARTMENT,
        payload
      );
      if (saveDepartmentMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, saveDepartmentMessage);
        this.clearForm();
      }
      this.isSaveDepartmentStart = false;
    },

    clearForm() {
      this.form = Object.assign({}, this.defaultForm);
    },

    async getDepartmentInformation() {
      const { name, description } = await this.$store.dispatch(
        GET_DEPARTMENT_INFORMATION,
        this.departmentID
      );
      this.form.name = name;
      this.form.description = description;
    },

    async updateDepartment() {
      this.isUpdateDepartmentStart = true;
      const payload = {
        departmentID: this.departmentID ? this.departmentID : 0,
        name: this.form.name ? this.form.name : "",
        description: this.form.description ? this.form.description : "",
      };
      const updateDepartmentMessage = await this.$store.dispatch(
        UPDATE_DEPARTMENT,
        payload
      );
      if (updateDepartmentMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, updateDepartmentMessage);
        await this.$router.push({ name: "department-table" });
      }
      this.isUpdateDepartmentStart = false;
    },
  },

  async created() {
    if (this.isViewMode) {
      await this.getDepartmentInformation();
    }
  },
};
</script>
