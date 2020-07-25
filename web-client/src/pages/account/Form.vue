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
            :error="!!accountError.username"
            :error-messages="accountError.username"
          ></v-text-field>
        </v-col>
        <v-col cols="12" v-if="!isViewMode">
          <custom-password-field
            :password.sync="form.password"
            outlined
            label="Password"
          ></custom-password-field
        ></v-col>
        <v-col cols="12">
          <v-select
            :items="accountTypes"
            label="Type"
            v-model="form.type"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" v-if="isViewMode">
          <custom-password-field
            :password.sync="form.newPassword"
            outlined
            label="New Password"
          ></custom-password-field>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        color="primary"
        :disabled="!isSaveAccountFormValid"
        :loading="isSaveAccountStart"
        @click="saveAccount"
        v-if="!isViewMode"
      >
        <span class="mr-1">Save Account</span>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <v-btn
        color="secondary"
        :disabled="!isUpdateAccountFormValid"
        :loading="isUpdateAccountStart"
        @click="updateAccount"
        v-if="isViewMode"
      >
        <span class="mr-1">Update Account</span>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {
  CLEAR_ACCOUNT_ERROR,
  GET_ACCOUNT_INFORMATION,
  SAVE_ACCOUNT,
  UPDATE_ACCOUNT,
} from "../../store/types/account";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";
import CustomPasswordField from "../../components/custom/PasswordField";

const defaultForm = {
  name: "",
  username: "",
  password: "",
  newPassword: "",
  type: null,
};

const accountTypes = ["Administrator", "Staff"];

export default {
  components: { CustomPasswordField },
  data() {
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
      isSaveAccountStart: false,
      isUpdateAccountStart: false,
      accountTypes,
    };
  },

  computed: {
    isSaveAccountFormValid() {
      const { name, username, password, type } = this.form;
      return name && username && password && type;
    },

    isUpdateAccountFormValid() {
      const { name, username, type } = this.form;
      return name && username && type;
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

    accountError() {
      return this.$store.state.account.error;
    },
  },

  methods: {
    async saveAccount() {
      this.isSaveAccountStart = true;
      const payload = {
        name: this.form.name ? this.form.name : "",
        username: this.form.username ? this.form.username : "",
        password: this.form.password ? this.form.password : "",
        type: this.form.type ? this.form.type : "",
      };
      const saveAccountMessage = await this.$store.dispatch(
        SAVE_ACCOUNT,
        payload
      );
      if (saveAccountMessage) {
        this.$store.commit(CLEAR_ACCOUNT_ERROR);
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, saveAccountMessage);
        this.clearForm();
      }
      this.isSaveAccountStart = false;
    },

    clearForm() {
      this.form = Object.assign({}, this.defaultForm);
    },

    async getAccountInformation() {
      const { name, username, type } = await this.$store.dispatch(
        GET_ACCOUNT_INFORMATION,
        this.accountID
      );
      this.form.name = name;
      this.form.username = username;
      this.form.type = type;
    },

    async updateAccount() {
      this.isUpdateAccountStart = true;
      const payload = {
        accountID: this.accountID ? this.accountID : 0,
        name: this.form.name ? this.form.name : "",
        username: this.form.username ? this.form.username : "",
        password: this.form.newPassword ? this.form.newPassword : "",
        type: this.form.type ? this.form.type : "",
      };
      const updateAccountMessage = await this.$store.dispatch(
        UPDATE_ACCOUNT,
        payload
      );
      if (updateAccountMessage) {
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, updateAccountMessage);
        await this.$router.push({ name: "account-table" });
      }
      this.isUpdateAccountStart = false;
    },
  },

  async created() {
    if (this.isViewMode) {
      await this.getAccountInformation();
    }
  },

  destroyed() {
    this.$store.commit(CLEAR_ACCOUNT_ERROR);
  },
};
</script>
