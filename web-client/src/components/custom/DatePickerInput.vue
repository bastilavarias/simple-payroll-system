<template>
  <v-menu v-model="menu" :close-on-content-click="false" max-width="290">
    <template v-slot:activator="{ on }">
      <v-text-field
        :value="formatDate(dateLocal)"
        :label="label"
        readonly
        v-on="on"
        @click:clear="dateLocal = null"
        :solo="solo"
        :outlined="outlined"
        :disabled="disabled"
      ></v-text-field>
    </template>
    <v-date-picker v-model="dateLocal" @change="menu = false"></v-date-picker>
  </v-menu>
</template>

<script>
import Utilities from "../../common/utilities";

export default {
  name: "custom-date-input",
  props: {
    label: {
      type: String,
      required: false,
    },

    date: {
      required: false,
    },

    solo: {
      type: Boolean,
      required: false,
    },

    outlined: {
      type: Boolean,
      required: false,
    },

    disabled: {
      type: Boolean,
      required: false,
    },
  },

  data() {
    return {
      dateLocal: null,
      menu: false,
    };
  },

  mixins: [Utilities],

  watch: {
    date(value) {
      this.dateLocal = value;
    },
    dateLocal(value) {
      this.$emit("update:date", value);
    },
  },
  created() {
    this.dateLocal = this.date;
  },
};
</script>
