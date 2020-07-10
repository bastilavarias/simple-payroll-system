<template>
  <v-card flat color="transparent">
    <div class="d-flex justify-space-between">
      <div class="flex-grow-1"></div>
      <v-btn color="primary" rounded @click="openEmployeeForm"
        >Add New Employee</v-btn
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
    text: "Department",
  },

  {
    text: "Designation",
  },

  {
    text: "Actions",
  },
];

export default {
  data() {
    return {
      tableHeaders: defaultTableHeaders,
    };
  },

  methods: {
    openEmployeeForm() {
      this.$router.push({
        name: "employee-form",
        params: { operation: "create" },
      });
    },
  },
};
</script>
