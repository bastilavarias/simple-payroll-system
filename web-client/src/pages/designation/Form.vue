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
        <v-col cols="12">
          <v-text-field
            label="Daily Salary"
            v-model="form.dailySalary"
            outlined
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        color="primary"
        :disabled="!isFormValid"
        :loading="isSaveDesignationStart"
        @click="saveDesignation"
        v-if="!isViewMode"
      >
        <span class="mr-1">Save Designation</span>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <v-btn
        color="secondary"
        :disabled="!isFormValid"
        :loading="isUpdateDesignationStart"
        @click="updateDesignation"
        v-if="isViewMode"
      >
        <span class="mr-1">Update Designation</span>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  GET_DESIGNATION_INFORMATION,
  SAVE_DESIGNATION,
  UPDATE_DESIGNATION,
} from "../../store/types/designation";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";
import CustomPasswordField from "../../components/custom/PasswordField";

const defaultForm = {
  name: "",
  description: "",
  dailySalary: "",
};

export default {
  components: { CustomPasswordField },
  data() {
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
      isSaveDesignationStart: false,
      isUpdateDesignationStart: false,
    };
  },

  computed: {
    isFormValid() {
      const { name, description, dailySalary } = this.form;
      return name && description && dailySalary;
    },

    operation() {
      return this.$route.params.operation;
    },

    designationID() {
      const id = this.$route.params.designationID;
      return id ? id : 0;
    },

    isViewMode() {
      return this.operation === "view";
    },
  },

  methods: {
    async saveDesignation() {
      this.isSaveDesignationStart = true;
      const payload = {
        name: this.form.name ? this.form.name : "",
        description: this.form.description ? this.form.description : "",
        dailySalary: this.form.dailySalary
          ? parseFloat(this.form.dailySalary)
          : 0,
      };
      const saveDesignationMessage = await this.$store.dispatch(
        SAVE_DESIGNATION,
        payload
      );
      if (saveDesignationMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, saveDesignationMessage);
        this.clearForm();
      }
      this.isSaveDesignationStart = false;
    },

    clearForm() {
      this.form = Object.assign({}, this.defaultForm);
    },

    async getDesignationInformation() {
      const { name, description, dailySalary } = await this.$store.dispatch(
        GET_DESIGNATION_INFORMATION,
        this.designationID
      );
      this.form.name = name;
      this.form.description = description;
      this.form.dailySalary = dailySalary;
    },

    async updateDesignation() {
      this.isUpdateDesignationStart = true;
      const payload = {
        designationID: this.designationID ? this.designationID : 0,
        name: this.form.name ? this.form.name : "",
        description: this.form.description ? this.form.description : "",
        dailySalary: this.form.dailySalary
          ? parseFloat(this.form.dailySalary)
          : 0,
      };
      const updateDesignationMessage = await this.$store.dispatch(
        UPDATE_DESIGNATION,
        payload
      );
      if (updateDesignationMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, updateDesignationMessage);
        await this.$router.push({ name: "designation-table" });
      }
      this.isUpdateDesignationStart = false;
    },
  },

  async created() {
    if (this.isViewMode) {
      await this.getDesignationInformation();
    }
  },
};
</script>
