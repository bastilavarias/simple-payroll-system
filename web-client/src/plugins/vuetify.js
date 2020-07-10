import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#383e56",
        secondary: "#f69e7b",
        error: "#b71c1c",
      },
    },
  },
});
