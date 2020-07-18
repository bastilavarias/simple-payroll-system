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
                append-icon="mdi-close"
                @click:append="clearForm"
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
                label="SSS Loan"
                outlined
                type="number"
                v-model="sssLoanDeduction"
                :disabled="totalDaysActive === 0"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Pag-IBIG Loan"
                outlined
                type="number"
                v-model="pagIbigLoanDeduction"
                :disabled="totalDaysActive === 0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="10">
              <v-text-field
                label="Other Loan"
                outlined
                type="number"
                v-model="otherLoanDeduction"
                :disabled="totalDaysActive === 0"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field
                :label="`No. of Absent ${
                  totalDaysAbsent > 0 ? `(${formatMoney(absentDeduction)})` : ''
                }`"
                outlined
                type="number"
                v-model="totalDaysAbsent"
                :disabled="totalDaysActive === 0"
              ></v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-space-between align-center">
            <div class="flex-grow-1"></div>
            <v-btn
              color="primary"
              :disabled="totalDaysActive === 0"
              :loading="isProcessPayrollStart"
              @click="processPayroll"
            >
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
                  {{ formatMoney(this.employeeDailySalary) }}</v-list-item-title
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
                <v-list-item-title>{{
                  formatMoney(sssDeduction)
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Pag-IBIG</v-list-item-subtitle>
                <v-list-item-title>{{
                  formatMoney(pagIbigDeduction)
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>PhilHealth</v-list-item-subtitle>
                <v-list-item-title>{{
                  formatMoney(philhealthDeduction)
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Tax</v-list-item-subtitle>
                <v-list-item-title>{{
                  formatMoney(taxDeduction)
                }}</v-list-item-title>
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
                <v-list-item-title>{{
                  formatMoney(totalSalary)
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Total Deduction</v-list-item-subtitle>
                <v-list-item-title>{{
                  formatMoney(totalDeduction)
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Net Pay</v-list-item-subtitle>
                <v-list-item-title class="success--text font-weight-bold">{{
                  formatMoney(netPay)
                }}</v-list-item-title>
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
  SAVE_EMPLOYEE,
} from "../store/types/employee";
import Utilities from "../common/utilities";
import CustomDateInput from "../components/custom/DatePickerInput";
import { SHOW_GLOBAL_NOTIFICATION } from "../store/types/global";
import { PROCESS_PAYROLL } from "../store/types/payroll";

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
      isProcessPayrollStart: false,
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

    absentDeduction() {
      let salary = 0;
      if (this.totalDaysActive === 0) return salary;
      salary = this.employeeDailySalary * this.totalDaysAbsent;
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

    basicSalaryWithoutAbsent() {
      let salary = 0;
      if (this.totalDaysActive === 0) return salary;
      salary = this.employeeDailySalary * this.totalDaysBetweenTwoDatePeriods;
      return salary;
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

    async processPayroll() {
      this.isProcessPayrollStart = true;
      const payload = {
        employeeID: this.employeeID ? parseInt(this.employeeID) : 0,
        periodDate: {
          start: this.startPeriodDate ? this.startPeriodDate : "",
          end: this.endPeriodDate ? this.endPeriodDate : "",
        },
        salaryDetails: {
          basicSalary: this.basicSalary ? this.basicSalary : 0,
          otherPay: this.otherPay ? this.otherPay : 0,
        },
        customDeduction: {
          sssLoan: this.sssLoanDeduction ? this.sssLoanDeduction : 0,
          pagIbigLoan: this.pagIbigLoanDeduction
            ? this.pagIbigLoanDeduction
            : 0,
          otherLoan: this.otherLoanDeduction ? this.otherLoanDeduction : 0,
          absent: this.absentDeduction ? this.absentDeduction : 0,
        },
        defaultDeduction: {
          sss: this.sssDeduction ? this.sssDeduction : 0,
          pagIbig: this.pagIbigDeduction ? this.pagIbigDeduction : 0,
          philhealth: this.philhealthDeduction ? this.philhealthDeduction : 0,
          tax: this.taxDeduction ? this.taxDeduction : 0,
        },
        summary: {
          basicSalaryWithoutAbsent: this.basicSalaryWithoutAbsent
            ? this.basicSalaryWithoutAbsent
            : 0,
          totalSalary: this.totalSalary ? this.totalSalary : 0,
          totalDeduction: this.totalDeduction ? this.totalDeduction : 0,
          netPay: this.netPay ? this.netPay : 0,
        },
      };
      const processedPayrollMessage = await this.$store.dispatch(
        PROCESS_PAYROLL,
        payload
      );
      if (processedPayrollMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, processedPayrollMessage);
        this.clearForm();
      }
      this.isProcessPayrollStart = false;
    },

    clearForm() {
      this.employeeID = null;
      this.startPeriodDate = null;
      this.endPeriodDate = null;
      this.otherPay = 0;
      this.sssLoanDeduction = 0;
      this.pagIbigLoanDeduction = 0;
      this.otherLoanDeduction = 0;
      this.totalDaysAbsent = 0;
      this.employeeInformation = Object.assign({}, {});
    },
  },

  async created() {
    await this.fetchEmployees();
  },
};
</script>
