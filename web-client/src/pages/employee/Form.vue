<template>
  <v-card flat color="transparent">
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
                  ><span class="text-capitalize">{{
                    item.name
                  }}</span></template
                >
                <template v-slot:selection="{ item }">
                  <span class="text-capitalize">{{ item.name }}</span>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <p class="v-subheader font-weight-bold pl-0">Profile Information</p>
          <v-row dense>
            <v-col cols="12" md="3">
              <v-text-field label="First Name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field label="Middle Name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field label="Last Name" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field label="Extension" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-select label="Birth Date" outlined></v-select>
            </v-col>
            <v-col cols="12" md="5">
              <v-select label="Place Of Birth" outlined></v-select>
            </v-col>
            <v-col cols="12" md="2">
              <v-select label="Sex" outlined></v-select>
            </v-col>
            <v-col cols="12">
              <v-select label="Citizenship" outlined></v-select>
            </v-col>
            <v-col cols="12">
              <v-select label="Civil Status" outlined></v-select>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field label="Address" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Contact No." outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field label="Height (m)" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field label="Weight (kg)" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-select label="Blood Type" outlined></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <p class="v-subheader font-weight-bold pl-0">
            Benefits
          </p>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-text-field label="GSIS ID No." outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="PAG-IBIG ID No." outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="PHILHEALTH No." outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="SSS No." outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="TIN No." outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field label="Agency Employee No." outlined></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn color="primary">
        <span class="mr-1">Save Employee</span>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { FETCH_DEPARTMENTS } from "../../store/types/department";
import { FETCH_DESIGNATIONS } from "../../store/types/designation";
import { GENERATE_EMPLOYEE_CUSTOM_ID } from "../../store/types/employee";

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
  data() {
    return {
      form: Object.assign({}, defaultForm),
      customID: "",
      departments: [],
      designations: [],
      isGenerateEmployeeCustomIDStart: false,
      isFetchDepartmentsStart: false,
      isFetchDesignationsStart: false,
    };
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
  },

  async created() {
    await this.generateEmployeeCustomID();
    await this.fetchDepartments();
    await this.fetchDesignations();
  },
};
</script>
