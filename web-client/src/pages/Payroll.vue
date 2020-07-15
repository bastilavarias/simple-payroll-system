<template>
  <v-card
    flat
    color="transparent"
    :color="isGetEmployeeInformationStart ? '' : 'transparent'"
    :loading="isGetEmployeeInformationStart"
  >
    <v-card-title class="display-1 font-weight-bold"
      >Manage Payroll</v-card-title
    >
    <v-card-subtitle
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
      voluptatum.</v-card-subtitle
    >
    <v-card-text>
      <v-row>
        <v-col cols="12" md="9">
          <p class="v-subheader font-weight-bold pl-0">Employee Information</p>
          <v-row dense>
            <v-col cols="12">
              <v-autocomplete
                label="Employee"
                outlined
                :loading="isFetchEmployeesStart"
                :items="employees"
                item-value="id"
                item-text="profile.lastName"
                append-icon="mdi-refresh"
                @click:append="fetchEmployees"
                v-model="employeeID"
              >
                <template v-slot:item="{ item }">
                  <span class="text-capitalize">{{
                    formatFullName(item.profile)
                  }}</span>
                </template>
                <template v-slot:selection="{ item }">
                  <span class="text-capitalize">{{
                    formatFullName(item.profile)
                  }}</span>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
              <custom-date-input
                :date.sync="startPeriodDate"
                label="Period Start"
                outlined
                :disabled="!isEmployeeInformationValid"
              ></custom-date-input>
            </v-col>
            <v-col cols="12" md="6">
              <custom-date-input
                :date.sync="endPeriodDate"
                label="Period End"
                outlined
                :disabled="!isEmployeeInformationValid"
              ></custom-date-input>
            </v-col>
          </v-row>
          <p class="v-subheader font-weight-bold pl-0">Salary Details</p>
          <v-row dense>
            <v-col cols="12" md="8">
              <v-text-field
                type="number"
                label="Basic Salary"
                outlined
                readonly
                :value="basicSalary"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                type="number"
                label="Other Pay"
                outlined
                :disabled="totalDaysActive === 0"
                v-model="otherPay"
              ></v-text-field>
            </v-col>
          </v-row>
          <p class="v-subheader font-weight-bold pl-0">Custom Deduction</p>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                label="SSS Loans"
                outlined
                type="number"
                v-model="sssLoanDeduction"
                :disabled="totalDaysActive === 0"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Pag-IBIG Loans"
                outlined
                type="number"
                v-model="pagIbigLoanDeduction"
                :disabled="totalDaysActive === 0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="10">
              <v-text-field
                label="Other Loans"
                outlined
                type="number"
                v-model="otherLoanDeduction"
                :disabled="totalDaysActive === 0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field
                label="No. Of Absents"
                outlined
                type="number"
                v-model="totalDaysAbsent"
                :disabled="totalDaysActive === 0"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-space-between align-center">
            <div class="flex-grow-1"></div>
            <v-btn color="primary" :disabled="totalDaysActive === 0">
              <span class="mr-1">Process Payroll</span>
              <v-icon>mdi-cogs</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <v-card
            color="primary"
            dark
            class="mb-5"
            :disabled="!isEmployeeInformationValid"
          >
            <v-subheader class="font-weight-bold white--text"
              >Work Information</v-subheader
            >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Designation Name</v-list-item-subtitle>
                <v-list-item-title>{{
                  isEmployeeInformationValid
                    ? employeeInformation.designation.name
                    : "N/A"
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle
                  >Designation Description</v-list-item-subtitle
                >
                <v-list-item-title>{{
                  isEmployeeInformationValid
                    ? employeeInformation.designation.description
                    : "N/A"
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Daily Salary</v-list-item-subtitle>
                <v-list-item-title>
                  {{ `&#8369; ${this.employeeDailySalary}` }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            color="primary"
            dark
            class="mb-5"
            :disabled="!isEmployeeInformationValid"
          >
            <v-subheader class="font-weight-bold white--text"
              >Default Deduction</v-subheader
            >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>SSS</v-list-item-subtitle>
                <v-list-item-title
                  >&#8369; {{ sssDeduction }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Pag-IBIG</v-list-item-subtitle>
                <v-list-item-title
                  >&#8369; {{ pagIbigDeduction }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>PhilHealth</v-list-item-subtitle>
                <v-list-item-title
                  >&#8369; {{ philhealthDeduction }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Tax</v-list-item-subtitle>
                <v-list-item-title
                  >&#8369; {{ taxDeduction }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card
            color="primary"
            dark
            class="mb-5"
            :disabled="!isEmployeeInformationValid"
          >
            <v-subheader class="font-weight-bold white--text"
              >Summary</v-subheader
            >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Total Salary</v-list-item-subtitle>
                <v-list-item-title>&#8369; {{ totalSalary }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Total Deduction</v-list-item-subtitle>
                <v-list-item-title
                  >&#8369; {{ totalDeduction }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Net Pay</v-list-item-subtitle>
                <v-list-item-title class="success--text font-weight-bold"
                  >&#8369; {{ netPay }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  FETCH_EMPLOYEES,
  GET_EMPLOYEE_INFORMATION,
} from "../store/types/employee";
import Utilities from "../common/utilities";
import CustomDateInput from "../components/custom/DatePickerInput";

export default {
  components: { CustomDateInput },
  mixins: [Utilities],

  data() {
    return {
      isFetchEmployeesStart: false,
      isGetEmployeeInformationStart: false,
      employees: [],
      employeeID: null,
      employeeInformation: {},
      startPeriodDate: null,
      endPeriodDate: null,
      otherPay: 0,
      sssLoanDeduction: 0,
      pagIbigLoanDeduction: 0,
      otherLoanDeduction: 0,
      totalDaysAbsent: 0,
    };
  },

  computed: {
    isEmployeeInformationValid() {
      return Object.keys(this.employeeInformation).length > 0;
    },

    employeeDailySalary() {
      const salary = this.isEmployeeInformationValid
        ? parseFloat(
            this.employeeInformation.designation.dailySalary.toString()
          )
        : 0;
      return salary.toFixed(2);
    },

    isDatePeriodsValid() {
      return this.startPeriodDate && this.endPeriodDate;
    },

    totalDaysBetweenTwoDatePeriods() {
      let days = 0;
      if (!this.isDatePeriodsValid) return days;
      const startPeriodDate = new Date(this.startPeriodDate);
      const endPeriodDate = new Date(this.endPeriodDate);
      const differenceInTime =
        endPeriodDate.getTime() - startPeriodDate.getTime();
      days = differenceInTime / (1000 * 3600 * 24);
      return days > 0 ? days + 1 : 0;
    },

    totalDaysActive() {
      const days = this.totalDaysBetweenTwoDatePeriods - this.totalDaysAbsent;
      return days > 0 ? days : 0;
    },

    basicSalary() {
      let salary = 0;
      if (this.totalDaysActive === 0) return salary;
      salary = this.employeeDailySalary * this.totalDaysActive;
      return salary;
    },

    sssDeduction() {
      let deduction = 0;
      if (this.totalDaysActive === 0) return deduction;
      const contributionPercent = 0.0363;
      deduction = this.basicSalary * contributionPercent;
      return deduction.toFixed(2);
    },

    pagIbigDeduction() {
      let deduction = 0;
      if (this.totalDaysActive === 0) return deduction;
      const contributionPercent = 0.02;
      deduction = this.basicSalary * contributionPercent;
      return deduction.toFixed(2);
    },

    philhealthDeduction() {
      let deduction = 0;
      if (this.totalDaysActive === 0) return deduction;
      const contributionPercent = 0.0275;
      deduction = this.basicSalary * contributionPercent;
      return deduction.toFixed(2);
    },

    birTaxPercentage() {
      let taxPercentage = 0;
      const basicSalary = this.basicSalary;
      if (basicSalary >= 25000.01 && basicSalary <= 40000) taxPercentage = 0.2;
      if (basicSalary >= 40000.01 && basicSalary <= 80000) taxPercentage = 0.25;
      if (basicSalary >= 80000.01 && basicSalary <= 200000) taxPercentage = 0.3;
      if (basicSalary >= 200000.01 && basicSalary <= 800000)
        taxPercentage = 0.32;
      if (basicSalary >= 800000.01) taxPercentage = 0.35;
      return taxPercentage;
    },

    taxDeduction() {
      let deduction = 0;
      if (this.totalDaysActive === 0) return deduction;
      deduction = this.basicSalary * this.birTaxPercentage;
      return deduction.toFixed(2);
    },

    totalSalary() {
      const otherPay = this.otherPay ? parseFloat(this.otherPay) : 0;
      const salary = this.basicSalary + otherPay;
      return salary.toFixed(2);
    },

    totalDeduction() {
      const sssLoanDeduction = this.sssLoanDeduction
        ? parseFloat(this.sssLoanDeduction)
        : 0;
      const pagIbigLoanDeduction = this.pagIbigLoanDeduction
        ? parseFloat(this.pagIbigLoanDeduction)
        : 0;
      const otherLoanDeduction = this.otherLoanDeduction
        ? parseFloat(this.otherLoanDeduction)
        : 0;
      const deduction =
        parseFloat(this.sssDeduction) +
        parseFloat(this.pagIbigDeduction) +
        parseFloat(this.philhealthDeduction) +
        parseFloat(this.taxDeduction) +
        sssLoanDeduction +
        pagIbigLoanDeduction +
        otherLoanDeduction;
      return deduction.toFixed(2);
    },

    netPay() {
      const pay =
        parseFloat(this.totalSalary) - parseFloat(this.totalDeduction);
      return pay.toFixed(2);
    },
  },

  watch: {
    async employeeID(val) {
      if (val !== null && val !== "") {
        await this.getEmployeeInformation();
      }
    },
  },

  methods: {
    async fetchEmployees() {
      this.isFetchEmployeesStart = true;
      const { employees } = await this.$store.dispatch(FETCH_EMPLOYEES);
      this.employees = employees;
      this.isFetchEmployeesStart = false;
    },

    async getEmployeeInformation() {
      this.isGetEmployeeInformationStart = true;
      this.employeeInformation = await this.$store.dispatch(
        GET_EMPLOYEE_INFORMATION,
        this.employeeID
      );
      this.isGetEmployeeInformationStart = false;
    },
  },

  async created() {
    await this.fetchEmployees();
  },
};
</script>
