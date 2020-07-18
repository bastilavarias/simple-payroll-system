<template>
  <section>
    <v-card color="transparent" flat>
      <v-card-title class="display-1 font-weight-bold"
        >Manage Reports</v-card-title
      >
      <v-card-subtitle
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
        voluptatum.</v-card-subtitle
      >
    </v-card>
    <v-card color="transparent" flat>
      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="5">
            <custom-date-input
              :date.sync="startPeriodDate"
              label="Period Start"
              outlined
            ></custom-date-input>
          </v-col>
          <v-col cols="12" md="5">
            <custom-date-input
              :date.sync="endPeriodDate"
              label="Period End"
              outlined
            ></custom-date-input>
          </v-col>
          <v-col cols="12" md="2">
            <v-btn
              color="primary"
              x-large
              block
              :disabled="totalDaysBetweenTwoDatePeriods === 0"
              @click="generatePayslips"
            >
              <span class="mr-1">Process</span>
              <v-icon x-large>mdi-cogs</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-data-table
        hide-default-footer
        :headers="tableHeaders"
        :items="payslips"
        :loading="isGeneratePayslipsStart"
      >
        <template v-slot:item.period="{ item }">
          {{ formatDate(item.period.start) }} -
          {{ formatDate(item.period.end) }}
        </template>
        <template v-slot:item.customID="{ item }">
          <span class="font-weight-bold">{{ item.employee.customID }}</span>
        </template>
        <template v-slot:item.name="{ item }">
          <span class="text-capitalize">{{
            formatFullName(item.employee.profile)
          }}</span>
        </template>
        <template v-slot:item.netPay="{ item }">
          <span class="font-weight-bold success--text">
            {{ formatMoney(item.summary.netPay) }}
          </span>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn icon @click="openPayslipInformationDialog(item.id)">
            <v-icon>mdi-table-arrow-right</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog width="800" v-model="isPayslipInformationDialogShow">
      <v-card tile>
        <v-toolbar color="primary" dark flat dense>
          <v-toolbar-title>
            <v-icon class="mr-1" large>mdi-file</v-icon>
            <span> </span>
            KRSW Agency Payslip
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text v-if="isPayslipInformationValid">
          <p class="v-subheader font-weight-bold pl-0">Employee Information</p>
          <div class="d-flex justify-space-between align-center py-5">
            <div class="font-weight-bold black--text">
              <payslip-information-label title="Employee Name">
                {{ formatFullName(payslipInformation.employee.profile) }}
              </payslip-information-label>
              <payslip-information-label title="Designation">
                {{ payslipInformation.employee.designation.name }}
              </payslip-information-label>
            </div>
            <div class="flex-grow-1"></div>
            <div class="font-weight-bold black--text">
              <payslip-information-label title="Period">
                {{ formatDate(payslipInformation.period.start) }} -
                {{ formatDate(payslipInformation.period.end) }}
              </payslip-information-label>
              <payslip-information-label title="Daily Salary">
                {{
                  formatMoney(
                    payslipInformation.employee.designation.dailySalary
                  )
                }}
              </payslip-information-label>
            </div>
          </div>
          <p class="v-subheader font-weight-bold pl-0">Administrator Details</p>
          <v-simple-table dense>
            <thead>
              <tr>
                <th></th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Administrator Name</td>
                <td>
                  {{ payslipInformation.administraitorDetails.name }}
                </td>
              </tr>
              <tr>
                <td>Processed Date</td>
                <td>
                  {{
                    formatDate(
                      payslipInformation.administraitorDetails.processedDate
                    )
                  }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <p class="v-subheader font-weight-bold pl-0">Salary Details</p>
          <v-simple-table dense>
            <thead>
              <tr>
                <th></th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Salary</td>
                <td>
                  {{
                    formatMoney(payslipInformation.salaryDetails.basicSalary)
                  }}
                </td>
              </tr>
              <tr v-if="payslipInformation.salaryDetails.otherPay > 0">
                <td>Other Pay</td>
                <td>
                  {{ formatMoney(payslipInformation.salaryDetails.otherPay) }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <p class="v-subheader font-weight-bold pl-0">Deductions</p>
          <v-simple-table dense>
            <thead>
              <tr>
                <th></th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SSS Contribution</td>
                <td>
                  {{ formatMoney(payslipInformation.defaultDeduction.sss) }}
                </td>
              </tr>
              <tr>
                <td>Pag-Ibig Contribution</td>
                <td>
                  {{ formatMoney(payslipInformation.defaultDeduction.pagIbig) }}
                </td>
              </tr>
              <tr>
                <td>Philhealth Contribution</td>
                <td>
                  {{
                    formatMoney(payslipInformation.defaultDeduction.philhealth)
                  }}
                </td>
              </tr>
              <tr v-if="payslipInformation.defaultDeduction.tax > 0">
                <td>Tax Contribution</td>
                <td>
                  {{ formatMoney(payslipInformation.defaultDeduction.tax) }}
                </td>
              </tr>
              <tr v-if="payslipInformation.customDeduction.sssLoan > 0">
                <td>SSS Loan</td>
                <td>
                  {{ formatMoney(payslipInformation.customDeduction.sssLoan) }}
                </td>
              </tr>
              <tr v-if="payslipInformation.customDeduction.pagIbigLoan > 0">
                <td>Pag-Ibig Loan</td>
                <td>
                  {{
                    formatMoney(payslipInformation.customDeduction.pagIbigLoan)
                  }}
                </td>
              </tr>
              <tr v-if="payslipInformation.customDeduction.otherLoan > 0">
                <td>Other Loan</td>
                <td>
                  {{
                    formatMoney(payslipInformation.customDeduction.otherLoan)
                  }}
                </td>
              </tr>
              <tr v-if="payslipInformation.customDeduction.absent > 0">
                <td>Absent</td>
                <td>
                  {{ formatMoney(payslipInformation.customDeduction.absent) }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
          <p class="v-subheader font-weight-bold pl-0">Summary</p>
          <v-simple-table dense>
            <thead>
              <tr>
                <th></th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Salary w/o Absents</td>
                <td>
                  {{
                    formatMoney(
                      payslipInformation.summary.basicSalaryWithoutAbsent
                    )
                  }}
                </td>
              </tr>
              <tr>
                <td>Total Salary</td>
                <td>
                  {{ formatMoney(payslipInformation.summary.totalSalary) }}
                </td>
              </tr>
              <tr>
                <td>Total Deduction</td>
                <td>
                  {{ formatMoney(payslipInformation.summary.totalDeduction) }}
                </td>
              </tr>
              <tr>
                <td>Net Pay</td>
                <td>
                  <span class="success--text font-weight-bold">
                    {{ formatMoney(payslipInformation.summary.netPay) }}
                  </span>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="closePayslipInformationDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
import CustomDateInput from "../components/custom/DatePickerInput";
import { PAYROLL_GENERATE_PAYSLIPS } from "../store/types/payroll";
import Utilities from "../common/utilities";
import PayslipInformationLabel from "../components/PayslipInformationLabel";

const defaultTableHeaders = [
  {
    text: "Period",
    value: "period",
  },
  {
    text: "Employee ID",
    value: "customID",
  },
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Net Pay",
    value: "netPay",
  },
  {
    text: "Action",
    value: "action",
  },
];

export default {
  components: { PayslipInformationLabel, CustomDateInput },

  mixins: [Utilities],

  data() {
    return {
      tableHeaders: defaultTableHeaders,
      startPeriodDate: null,
      endPeriodDate: null,
      isGeneratePayslipsStart: false,
      payslips: [],
      isPayslipInformationDialogShow: false,
      selectedPayslipID: null,
    };
  },

  computed: {
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

    isPayslipInformationValid() {
      return this.selectedPayslipID;
    },

    payslipInformation() {
      let information = {};
      if (!this.isPayslipInformationValid) return information;
      information = this.payslips.find(
        (payslip) => payslip.id === this.selectedPayslipID
      );
      return information;
    },
  },

  watch: {
    isPayslipInformationDialogShow(isOpen) {
      if (!isOpen) this.closePayslipInformationDialog();
    },
  },

  methods: {
    async generatePayslips() {
      this.payslips = [];
      this.isGeneratePayslipsStart = true;
      const payload = {
        startPeriodDate: this.startPeriodDate ? this.startPeriodDate : "",
        endPeriodDate: this.endPeriodDate ? this.endPeriodDate : "",
      };
      this.payslips = await this.$store.dispatch(
        PAYROLL_GENERATE_PAYSLIPS,
        payload
      );
      this.isGeneratePayslipsStart = false;
    },

    openPayslipInformationDialog(id) {
      this.selectedPayslipID = id;
      this.isPayslipInformationDialogShow = true;
    },

    closePayslipInformationDialog() {
      this.selectedPayslipID = null;
      this.isPayslipInformationDialogShow = false;
    },
  },
};
</script>
