<template>
  <v-card flat color="transparent">
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-text-field label="Name" outlined></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Username" outlined></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Password" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn color="primary">
        <span class="mr-1">Save Account</span>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
