import moment from "moment";

const Utilities = {
  methods: {
    formatDate(date) {
      return date ? moment(date).format("MMMM D, YYYY") : "";
    },

    getTextFirstLetter(text) {
      return text ? text[0] : "";
    },

    formatFullName({ firstName, middleName, lastName, extension }) {
      return `${firstName} ${
        middleName ? `${this.getTextFirstLetter(middleName)}.` : ""
      } ${lastName} ${extension ? `${extension.toUpperCase()}` : ""} `;
    },
  },
};

export default Utilities;
