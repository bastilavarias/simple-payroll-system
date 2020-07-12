<template>
  <v-card flat color="transparent">
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            label="Name"
            v-model="form.name"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Username"
            v-model="form.username"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <custom-password-field
            :password.sync="form.password"
            outlined
            label="Password"
          ></custom-password-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        color="primary"
        :disabled="!isFormValid"
        :loading="isSaveAccountStart"
        @click="saveAccount"
      >
        <span class="mr-1">Save Account</span>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  GET_ACCOUNT_INFORMATION,
  SAVE_ACCOUNT,
} from "../../store/types/account";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";
import CustomPasswordField from "../../components/custom/PasswordField";

const defaultForm = {
  name: "",
  username: "",
  password: "",
};

export default {
  components: { CustomPasswordField },
  data() {
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
      isSaveAccountStart: false,
    };
  },

  computed: {
    isFormValid() {
      const { name, username, password } = this.form;
      return name && username && password;
    },

    operation() {
      return this.$route.params.operation;
    },

    accountID() {
      const id = this.$route.params.accountID;
      return id ? id : 0;
    },

    isViewMode() {
      return this.operation === "view";
    },
  },

  methods: {
    async saveAccount() {
      this.isSaveAccountStart = true;
      const payload = {
        name: this.form.name ? this.form.name : "",
        username: this.form.username ? this.form.username : "",
        password: this.form.password ? this.form.password : "",
      };
      const saveAccountMessage = await this.$store.dispatch(
        SAVE_ACCOUNT,
        payload
      );
      if (saveAccountMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, saveAccountMessage);
        this.clearForm();
      }
      this.isSaveAccountStart = false;
    },

    clearForm() {
      this.form = Object.assign({}, this.defaultForm);
    },

    async getAccountInformation() {
      const { name, username } = await this.$store.dispatch(
        GET_ACCOUNT_INFORMATION,
        this.accountID
      );
      this.form.name = name;
      this.form.username = username;
    },
  },

  async created() {
    if (this.isViewMode) {
      await this.getAccountInformation();
    }
  },
};
</script>
