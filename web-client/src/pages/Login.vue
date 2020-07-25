<template>
  <v-card color="transparent" flat>
    <div class="text-center mb-10">
      <v-btn fab depressed color="primary" x-large>
        <v-icon x-large>mdi-file</v-icon>
      </v-btn>
    </div>
    <v-card-subtitle>Login your credentials</v-card-subtitle>
    <v-card-text>
      <v-row dense>
        <v-col cols="12">
          <v-text-field
            v-model="form.username"
            outlined
            label="Username"
            :error="!!authenticationError.username"
            :error-messages="authenticationError.username"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <custom-password-field
            :password.sync="form.password"
            outlined
            label="Password"
            :error="!!authenticationError.password"
            :error-messages="authenticationError.password"
          ></custom-password-field>
        </v-col>
        <v-col cols="12">
          <v-btn
            color="primary"
            block
            @click="login"
            :loading="isLoginStart"
            :disabled="!isFormValid"
            >Login</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import CustomPasswordField from "../components/custom/PasswordField";
import {
  AUTHENTICATION_LOGIN,
  CLEAR_AUTHENTICATION_ERROR,
} from "../store/types/authentication";

const defaultForm = {
  username: "",
  password: "",
};
export default {
  components: { CustomPasswordField },

  data() {
    return {
      form: Object.assign({}, defaultForm),
      defaultForm,
      isLoginStart: false,
    };
  },

  computed: {
    isFormValid() {
      const { username, password } = this.form;
      return username && password;
    },
    authenticationError() {
      return this.$store.state.authentication.error;
    },
    isAuthenticated() {
      return this.$store.state.authentication.isAuthenticated;
    },
    credentials() {
      return this.$store.state.authentication.credentials;
    },
  },

  methods: {
    async login() {
      this.isLoginStart = true;
      await this.$store.dispatch(AUTHENTICATION_LOGIN, this.form);
      this.isLoginStart = false;
      if (this.isAuthenticated) {
        const redirectTo =
          this.credentials.actions.length > 0
            ? this.credentials.actions[0].to
            : { name: "login" };
        await this.$router.push(redirectTo);
      }
    },
  },

  destroyed() {
    this.$store.commit(CLEAR_AUTHENTICATION_ERROR);
  },
};
</script>
