import moment from "moment";

const Utilities = {
  methods: {
    formatDate(date) {
      return date ? moment(date).format("MMMM D, YYYY") : "";
    },
  },
};

export default Utilities;
