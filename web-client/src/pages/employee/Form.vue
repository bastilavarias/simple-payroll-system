<template>
  <v-card
    flat
    tile
    :color="isGetEmployeeInformationStart ? '' : 'transparent'"
    :loading="isGetEmployeeInformationStart"
  >
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <p class="v-subheader font-weight-bold pl-0">Work Details</p>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                label="Employee ID"
                append-icon="mdi-refresh"
                @click:append="generateEmployeeCustomID"
                outlined
                :loading="isGenerateEmployeeCustomIDStart"
                :value="customID"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="8">
              <v-autocomplete
                label="Department"
                outlined
                :items="departments"
                item-value="id"
                item-text="name"
                v-model="form.departmentID"
                :loading="isFetchDepartmentsStart"
              >
                <template v-slot:item="{ item }"
                  ><span class="text-capitalize">{{
                    item.name
                  }}</span></template
                >
                <template v-slot:selection="{ item }">
                  <span class="text-capitalize">{{ item.name }}</span>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" md="4">
              <v-autocomplete
                label="Designation"
                outlined
                :items="designations"
                item-value="id"
                item-text="name"
                v-model="form.designationID"
                :loading="isFetchDesignationsStart"
              >
                <template v-slot:item="{ item }"
                  ><span class="text-capitalize"
                    ><span class="mr-1">{{ item.name }}</span
                    >(<span class="grey--text font-weight-bold">{{
                      formatMoney(item.dailySalary)
                    }}</span
                    >)</span
                  ></template
                >
                <template v-slot:selection="{ item }"
                  ><span class="text-capitalize"
                    ><span class="mr-1">{{ item.name }}</span
                    >(<span class="grey--text font-weight-bold">{{
                      formatMoney(item.dailySalary)
                    }}</span
                    >)</span
                  ></template
                >
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <p class="v-subheader font-weight-bold pl-0">Profile Information</p>
          <v-row dense>
            <v-col cols="12" md="3">
              <v-text-field
                label="First Name"
                outlined
                v-model="form.profile.firstName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                label="Middle Name"
                outlined
                v-model="form.profile.middleName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                label="Last Name"
                outlined
                v-model="form.profile.lastName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                label="Extension"
                outlined
                v-model="form.profile.extensionName"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <custom-date-input
                outlined
                :date.sync="form.profile.birthDate"
                label="Birth Date"
              ></custom-date-input>
            </v-col>
            <v-col cols="12" md="5">
              <v-autocomplete
                label="Place Of Birth"
                outlined
                :items="cities"
                item-value="name"
                item-text="name"
                v-model="form.profile.birthPlace"
              >
                <template v-slot:selection="{ item }"
                  ><span class="text-capitalize">{{
                    item.name
                  }}</span></template
                ></v-autocomplete
              >
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                label="Sex"
                outlined
                :items="sexes"
                v-model="form.profile.sex"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-autocomplete
                label="Citizenship"
                outlined
                :items="nationalities"
                item-value="label"
                item-text="label"
                v-model="form.profile.citizenship"
              >
                <template v-slot:selection="{ item }"
                  ><span class="text-capitalize">{{
                    item.label
                  }}</span></template
                >
              </v-autocomplete>
            </v-col>
            <v-col cols="12">
              <v-select
                label="Civil Status"
                outlined
                :items="civilStatuses"
                v-model="form.profile.civilStatus"
              ></v-select>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                label="Address"
                outlined
                v-model="form.profile.address"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Contact No."
                outlined
                v-model="form.profile.contactNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                label="Height (meters)"
                outlined
                v-model="form.profile.height"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                label="Weight (kilograms)"
                outlined
                v-model="form.profile.weight"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-select
                label="Blood Type"
                outlined
                :items="bloodTypes"
                v-model="form.profile.bloodType"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <p class="v-subheader font-weight-bold pl-0">
            Benefits
          </p>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field
                label="GSIS ID No."
                outlined
                v-model="form.benefit.gsisNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="PAG-IBIG ID No."
                outlined
                v-model="form.benefit.pagIbigIDNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="PHILHEALTH No."
                outlined
                v-model="form.benefit.philhealthNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="SSS No."
                outlined
                v-model="form.benefit.sssNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="TIN No."
                outlined
                v-model="form.benefit.tinNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Agency Employee No."
                outlined
                v-model="form.benefit.agencyEmployeeNumber"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        color="primary"
        :disabled="!isFormValid"
        :loading="isSaveEmployeeStart"
        @click="saveEmployee"
        v-if="!isViewMode"
      >
        <span class="mr-1">Save Employee</span>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <v-btn
        color="secondary"
        :disabled="!isFormValid"
        :loading="isUpdateEmployeeStart"
        @click="updateEmployee"
        v-if="isViewMode"
      >
        <span class="mr-1">Update Employee</span>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { FETCH_DEPARTMENTS } from "../../store/types/department";
import { FETCH_DESIGNATIONS } from "../../store/types/designation";
import { GENERATE_EMPLOYEE_CUSTOM_ID } from "../../store/types/employee";
import CustomDateInput from "../../components/custom/DatePickerInput";
import cities from "../../assets/data/cities.json";
import nationalities from "../../assets/data/nationalities.json";
import {
  GET_EMPLOYEE_INFORMATION,
  SAVE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../../store/types/employee";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";
import Utilities from "../../common/utilities";

const defaultForm = {
  departmentID: null,
  designationID: null,
  profile: {
    firstName: "",
    middleName: "",
    lastName: "",
    extensionName: "",
    birthDate: null,
    birthPlace: "",
    sex: "",
    citizenship: "",
    civilStatus: "",
    address: "",
    contactNumber: "",
    height: "",
    weight: "",
    bloodType: "",
  },
  benefit: {
    gsisNumber: "",
    pagIbigIDNumber: "",
    philhealthNumber: "",
    sssNumber: "",
    tinNumber: "",
    agencyEmployeeNumber: "",
  },
};

export default {
  components: { CustomDateInput },

  mixins: [Utilities],

  data() {
    return {
      form: Object.assign({}, defaultForm),
      customID: "",
      departments: [],
      designations: [],
      isGenerateEmployeeCustomIDStart: false,
      isFetchDepartmentsStart: false,
      isFetchDesignationsStart: false,
      cities: cities,
      sexes: ["Male", "Female"],
      nationalities: nationalities,
      civilStatuses: ["Single", "Maried", "Divorced", "Separated", "Widowed"],
      bloodTypes: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
      isSaveEmployeeStart: false,
      isGetEmployeeInformationStart: false,
      isUpdateEmployeeStart: false,
      employeeProfileID: null,
      employeeBenefitID: null,
    };
  },
  computed: {
    isFormValid() {
      const { departmentID, designationID, profile, benefit } = this.form;
      const {
        firstName,
        lastName,
        birthDate,
        birthPlace,
        sex,
        citizenship,
        civilStatus,
        address,
      } = profile;
      return (
        departmentID &&
        designationID &&
        firstName &&
        lastName &&
        birthDate &&
        birthPlace &&
        sex &&
        citizenship &&
        civilStatus &&
        address
      );
    },

    operation() {
      return this.$route.params.operation;
    },

    employeeID() {
      const id = this.$route.params.employeeID;
      return id ? id : 0;
    },

    isViewMode() {
      return this.operation === "view";
    },
  },

  methods: {
    async generateEmployeeCustomID() {
      this.isGenerateEmployeeCustomIDStart = true;
      const { customID } = await this.$store.dispatch(
        GENERATE_EMPLOYEE_CUSTOM_ID
      );
      this.customID = customID;
      this.isGenerateEmployeeCustomIDStart = false;
    },

    async fetchDepartments() {
      this.isFetchDepartmentsStart = true;
      const { departments } = await this.$store.dispatch(FETCH_DEPARTMENTS);
      this.departments = departments;
      this.isFetchDepartmentsStart = false;
    },

    async fetchDesignations() {
      this.isFetchDesignationsStart = true;
      const { designations } = await this.$store.dispatch(FETCH_DESIGNATIONS);
      this.designations = designations;
      this.isFetchDesignationsStart = false;
    },

    async saveEmployee() {
      this.isSaveEmployeeStart = true;
      const payload = this.form;
      const saveEmployeeMessage = await this.$store.dispatch(
        SAVE_EMPLOYEE,
        payload
      );
      if (saveEmployeeMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, saveEmployeeMessage);
        await this.generateEmployeeCustomID();
        this.clearForm();
      }
      this.isSaveEmployeeStart = false;
    },

    clearForm() {
      this.form.departmentID = null;
      this.form.designationID = null;
      this.form.profile.firstName = "";
      this.form.profile.middleName = "";
      this.form.profile.lastName = "";
      this.form.profile.extensionName = "";
      this.form.profile.birthDate = null;
      this.form.profile.birthPlace = "";
      this.form.profile.sex = "";
      this.form.profile.citizenship = "";
      this.form.profile.civilStatus = "";
      this.form.profile.address = "";
      this.form.profile.contactNumber = "";
      this.form.profile.height = "";
      this.form.profile.weight = "";
      this.form.profile.bloodType = "";
      this.form.benefit.pagIbigIDNumber = "";
      this.form.benefit.philhealthNumber = "";
      this.form.benefit.sssNumber = "";
      this.form.benefit.tinNumber = "";
      this.form.benefit.agencyEmployeeNumber = "";
    },

    async getEmployeeInformation() {
      this.isGetEmployeeInformationStart = true;
      const {
        customID,
        department,
        designation,
        profile,
        benefit,
      } = await this.$store.dispatch(GET_EMPLOYEE_INFORMATION, this.employeeID);
      this.customID = customID;
      this.form.departmentID = department.id;
      this.form.designationID = designation.id;
      this.form.profile = profile;
      this.form.benefit = benefit;
      this.employeeProfileID = profile.id;
      this.employeeBenefitID = benefit.id;
      this.isGetEmployeeInformationStart = false;
    },

    async updateEmployee() {
      this.isUpdateEmployeeStart = true;
      const payload = {
        employeeID: this.employeeID,
        employeeProfileID: this.employeeProfileID,
        employeeBenefitID: this.employeeBenefitID,
        ...this.form,
      };
      const updateEmployeeMessage = await this.$store.dispatch(
        UPDATE_EMPLOYEE,
        payload
      );
      if (updateEmployeeMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, updateEmployeeMessage);
        await this.$router.push({ name: "employee-table" });
      }
      this.isUpdateEmployeeStart = false;
    },
  },

  async created() {
    await this.generateEmployeeCustomID();
    await this.fetchDepartments();
    await this.fetchDesignations();
    if (this.isViewMode) {
      await this.getEmployeeInformation();
    }
  },
};
</script>
