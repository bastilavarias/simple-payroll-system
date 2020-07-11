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
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <custom-password-field
            :password.sync="form.password"
            outlined
            label="Password"
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

const defaultForm = {
  username: "",
  password: "",
};
export default {
  components: { CustomPasswordField },

  data() {
    return {
      form: Object.assign({}, defaultForm),
      isLoginStart: false,
    };
  },

  computed: {
    isFormValid() {
      const { username, password } = this.form;
      return username && password;
    },
  },

  methods: {
    login() {},
  },
};
</script>
