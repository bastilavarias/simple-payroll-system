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
              @click="generatePaySlips"
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
        :items="paySlips"
        :loading="isGeneratePaySlipsStart"
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
            &#8369; {{ item.summary.netPay }}
          </span>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn icon>
            <v-icon>mdi-table-arrow-right</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </section>
</template>

<script>
import CustomDateInput from "../components/custom/DatePickerInput";
import { PAYROLL_GENERATE_PAY_SLIPS } from "../store/types/payroll";
import Utilities from "../common/utilities";

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
  components: { CustomDateInput },

  mixins: [Utilities],

  data() {
    return {
      tableHeaders: defaultTableHeaders,
      startPeriodDate: null,
      endPeriodDate: null,
      isGeneratePaySlipsStart: false,
      paySlips: [],
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
  },

  methods: {
    async generatePaySlips() {
      this.isGeneratePaySlipsStart = true;
      const payload = {
        startPeriodDate: this.startPeriodDate ? this.startPeriodDate : "",
        endPeriodDate: this.endPeriodDate ? this.endPeriodDate : "",
      };
      this.paySlips = await this.$store.dispatch(
        PAYROLL_GENERATE_PAY_SLIPS,
        payload
      );
      this.isGeneratePaySlipsStart = false;
    },
  },
};
</script>
