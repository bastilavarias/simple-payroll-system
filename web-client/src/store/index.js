import Vue from "vue";
import Vuex from "vuex";
import AccountStoreModule from "./modules/account";
import GlobalStoreModule from "./modules/global";
import DepartmentStoreModule from "./modules/department";
import DesignationStoreModule from "./modules/designation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account: AccountStoreModule,
    global: GlobalStoreModule,
    department: DepartmentStoreModule,
    designation: DesignationStoreModule,
  },
});
