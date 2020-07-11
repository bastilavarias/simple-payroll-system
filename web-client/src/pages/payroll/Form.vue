<template>
  <v-card flat color="transparent">
    <v-card-text>
      <v-row>
        <v-col cols="12" md="9">
          <p class="v-subheader font-weight-bold pl-0">Employee Information</p>
          <v-row dense>
            <v-col cols="12" md="6">
              <v-select label="Period Start" outlined></v-select>
            </v-col>
            <v-col cols="12" md="6">
              <v-select label="Period End" outlined></v-select>
            </v-col>
            <v-col cols="12">
              <v-autocomplete label="Employee" outlined></v-autocomplete>
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
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                type="number"
                label="Others"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <p class="v-subheader font-weight-bold pl-0">Loan Deductions</p>
          <v-row dense>
            <v-col cols="12">
              <v-text-field label="SSS Loans" outlined></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Pag-IBIG Loans" outlined></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Other Loans" outlined></v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-space-between align-center">
            <div class="flex-grow-1"></div>
            <v-btn color="primary">
              <span class="mr-1">Process Payroll</span>
              <v-icon>mdi-cogs</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <v-card color="primary" dark class="mb-5">
            <v-subheader class="font-weight-bold white--text"
              >Work Information</v-subheader
            >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Designation Title</v-list-item-subtitle>
                <v-list-item-title>Janitor</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle
                  >Designation Description</v-list-item-subtitle
                >
                <v-list-item-title
                  >Lorem ipsum dolor sit amet.</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Daily Salary</v-list-item-subtitle>
                <v-list-item-title>&#8369; 650.00</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card color="primary" dark class="mb-5">
            <v-subheader class="font-weight-bold white--text"
              >Default Deductions</v-subheader
            >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>SSS</v-list-item-subtitle>
                <v-list-item-title>&#8369; 650.00</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Pag-IBIG</v-list-item-subtitle>
                <v-list-item-title>&#8369; 650.00</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>PhilHealth</v-list-item-subtitle>
                <v-list-item-title>&#8369; 650.00</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Tax</v-list-item-subtitle>
                <v-list-item-title>&#8369; 650.00</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card color="primary" dark class="mb-5">
            <v-subheader class="font-weight-bold white--text"
              >Summary</v-subheader
            >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Total Salary</v-list-item-subtitle>
                <v-list-item-title>&#8369; 650.00</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Total Deductions</v-list-item-subtitle>
                <v-list-item-title>&#8369; 650.00</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Net Pay</v-list-item-subtitle>
                <v-list-item-title class="success--text font-weight-bold"
                  >&#8369; 650.00</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <!--    <v-card-actions>-->
    <!--      <div class="flex-grow-1"></div>-->

    <!--    </v-card-actions>-->
  </v-card>
</template>
