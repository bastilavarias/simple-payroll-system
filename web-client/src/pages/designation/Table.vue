<template>
  <v-card flat color="transparent">
    <div class="d-flex justify-space-between">
      <div class="flex-grow-1"></div>
      <v-btn color="primary" rounded @click="openDesignationForm"
        >Add New Designation</v-btn
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
    text: "Name",
  },

  {
    text: "Description",
  },

  {
    text: "Daily Salary",
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
    openDesignationForm() {
      this.$router.push({
        name: "designation-form",
        params: { operation: "create" },
      });
    },
  },
};
</script>
