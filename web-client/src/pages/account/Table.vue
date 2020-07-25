<template>
  <v-card flat color="transparent">
    <div class="d-flex justify-space-between">
      <div class="flex-grow-1"></div>
      <v-btn color="primary" rounded @click="openDepartmentForm"
        >Add New Account</v-btn
      >
    </div>
    <v-card-text>
      <v-data-table
        :headers="tableHeaders"
        :items="accounts"
        :loading="isFetchAccountsStart"
        :search="keyword"
      >
        <template v-slot:top>
          <v-text-field
            label="Search here"
            single-line
            outlined
            append-icon="mdi-magnify"
            v-model="keyword"
          ></v-text-field>
        </template>
        <template v-slot:item.name="{ item }">
          <span class="text-capitalize">{{ item.name }}</span>
        </template>
        <template v-slot:item.username="{ item }">
          {{ item.username }}
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon color="secondary" @click="viewAccount(item.id)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="error" @click="selectAccountIDForRemoval(item.id)">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <custom-alert-dialog
      :is-show.sync="isRemoveAccountAlertDialogShow"
      :is-loading="isRemoveAccountStart"
      :action="removeAccount"
      color="error"
      title="Warning!"
      message="Removing this account is irreversible. click confirm to continue."
    ></custom-alert-dialog>
  </v-card>
</template>

<script>
import { FETCH_ACCOUNTS, REMOVE_ACCOUNT } from "../../store/types/account";
import CustomAlertDialog from "../../components/custom/AlertDialog";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";

const defaultTableHeaders = [
  {
    text: "Name",
    value: "name",
  },

  {
    text: "Username",
    value: "username",
  },

  {
    text: "Type",
    value: "type",
  },

  {
    text: "Actions",
    value: "actions",
  },
];

export default {
  components: { CustomAlertDialog },
  data() {
    return {
      tableHeaders: defaultTableHeaders,
      isFetchAccountsStart: false,
      accounts: [],
      keyword: "",
      isRemoveAccountStart: false,
      isRemoveAccountAlertDialogShow: false,
      selectedAccountIDForRemoval: null,
    };
  },

  methods: {
    openDepartmentForm() {
      this.$router.push({
        name: "account-form",
        params: { operation: "create" },
      });
    },

    async fetchAccounts() {
      this.isFetchAccountsStart = true;
      const { accounts } = await this.$store.dispatch(FETCH_ACCOUNTS);
      this.accounts = accounts;
      this.isFetchAccountsStart = false;
    },

    viewAccount(accountID) {
      this.$router.push({
        name: "account-form",
        params: { operation: "view", accountID },
      });
    },

    selectAccountIDForRemoval(accountID) {
      this.isRemoveAccountAlertDialogShow = true;
      this.selectedAccountIDForRemoval = accountID;
    },

    async removeAccount() {
      this.isRemoveAccountStart = true;
      const removeAccountMessage = await this.$store.dispatch(
        REMOVE_ACCOUNT,
        this.selectedAccountIDForRemoval
      );
      if (removeAccountMessage) {
        this.isRemoveAccountAlertDialogShow = false;
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, removeAccountMessage);
        await this.fetchAccounts();
      }
      this.isRemoveAccountStart = false;
    },
  },

  async created() {
    await this.fetchAccounts();
  },
};
</script>
