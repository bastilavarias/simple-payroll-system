<template>
  <v-card flat color="transparent">
    <div class="d-flex justify-space-between">
      <div class="flex-grow-1"></div>
      <v-btn color="primary" rounded @click="openDesignationForm"
        >Add New Designation</v-btn
      >
    </div>
    <v-card-text>
      <v-data-table
        :headers="tableHeaders"
        :items="designations"
        :loading="isFetchDesignationsStart"
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
        <template v-slot:item.description="{ item }">
          <span class="text-capitalize">{{ item.description }}</span>
        </template>
        <template v-slot:item.dailySalary="{ item }">
          <span>{{ formatMoney(item.dailySalary) }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon color="secondary" @click="viewDesignation(item.id)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            icon
            color="error"
            @click="selectDesignationIDForRemoval(item.id)"
          >
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <custom-alert-dialog
      :is-show.sync="isRemoveDesignationAlertDialogShow"
      :is-loading="isRemoveDesignationStart"
      :action="removeDesignation"
      color="error"
      title="Warning!"
      message="Removing this designation is irreversible. click confirm to continue."
    ></custom-alert-dialog>
  </v-card>
</template>

<script>
import {
  FETCH_DESIGNATIONS,
  REMOVE_DESIGNATION,
} from "../../store/types/designation";
import CustomAlertDialog from "../../components/custom/AlertDialog";
import { SHOW_GLOBAL_NOTIFICATION } from "../../store/types/global";
import Utilities from "../../common/utilities";

const defaultTableHeaders = [
  {
    text: "Name",
    value: "name",
  },

  {
    text: "Description",
    value: "description",
  },

  {
    text: "Daily Salary",
    value: "dailySalary",
  },

  {
    text: "Actions",
    value: "actions",
  },
];

export default {
  components: { CustomAlertDialog },

  mixins: [Utilities],

  data() {
    return {
      tableHeaders: defaultTableHeaders,
      isFetchDesignationsStart: false,
      designations: [],
      keyword: "",
      isRemoveDesignationStart: false,
      isRemoveDesignationAlertDialogShow: false,
      selectedDesignationIDForRemoval: null,
    };
  },

  methods: {
    openDesignationForm() {
      this.$router.push({
        name: "designation-form",
        params: { operation: "create" },
      });
    },

    async fetchDesignations() {
      this.isFetchDesignationsStart = true;
      const { designations } = await this.$store.dispatch(FETCH_DESIGNATIONS);
      this.designations = designations;
      this.isFetchDesignationsStart = false;
    },

    viewDesignation(designationID) {
      this.$router.push({
        name: "designation-form",
        params: { operation: "view", designationID },
      });
    },

    selectDesignationIDForRemoval(designationID) {
      this.isRemoveDesignationAlertDialogShow = true;
      this.selectedDesignationIDForRemoval = designationID;
    },

    async removeDesignation() {
      this.isRemoveDesignationStart = true;
      const removeDesignationMessage = await this.$store.dispatch(
        REMOVE_DESIGNATION,
        this.selectedDesignationIDForRemoval
      );
      if (removeDesignationMessage) {
        this.isRemoveDesignationAlertDialogShow = false;
        this.$store.commit(SHOW_GLOBAL_NOTIFICATION, removeDesignationMessage);
        await this.fetchDesignations();
      }
      this.isRemoveDesignationStart = false;
    },
  },

  async created() {
    await this.fetchDesignations();
  },
};
</script>
