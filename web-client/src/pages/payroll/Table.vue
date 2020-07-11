<template>
  <v-card flat color="transparent">
    <div class="d-flex justify-space-between">
      <div class="flex-grow-1"></div>
      <v-btn color="primary" rounded @click="openPayrollForm"
        >Add New Payroll</v-btn
      >
    </div>
    <v-card-text>
      <v-data-table :headers="tableHeaders">
        <template v-slot:top>
          <v-text-field
            label="Search here"
            single-line
            outlined
            append-icon="mdi-magnify"
          ></v-text-field>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
const defaultTableHeaders = [
  {
    text: "Employee ID",
  },

  {
    text: "Name",
  },

  {
    text: "Period",
  },

  {
    text: "Net Pay",
  },

  {
    text: "Date",
  },
];

export default {
  data() {
    return {
      tableHeaders: defaultTableHeaders,
    };
  },

  methods: {
    openPayrollForm() {
      this.$router.push({
        name: "payroll-form",
        params: { operation: "create" },
      });
    },
  },
};
</script>
