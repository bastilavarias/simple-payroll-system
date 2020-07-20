import moment from "moment";
import numberFormatter from "number-formatter";

const Utilities = {
  methods: {
    formatDate(date) {
      return date ? moment(date).format("MMMM D, YYYY") : "";
    },

    getTextFirstLetter(text) {
      return text ? text[0] : "";
    },

    formatFullName({ firstName, middleName, lastName, extensionName }) {
      return `${firstName} ${
        middleName ? `${this.getTextFirstLetter(middleName)}.` : ""
      } ${lastName} ${extensionName ? `${extensionName.toUpperCase()}` : ""} `;
    },

    formatMoney(money) {
      return money > 0 ? numberFormatter("₱ #,###.00", money) : `₱ 0.00`;
    },
  },
};

export default Utilities;
