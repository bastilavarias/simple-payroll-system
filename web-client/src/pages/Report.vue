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
            <v-select label="Date From" outlined></v-select>
          </v-col>
          <v-col cols="12" md="5">
            <v-select label="Date To" outlined></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-btn color="primary" x-large block>
              <span class="mr-1">Process</span>
              <v-icon x-large>mdi-cogs</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </section>
</template>
