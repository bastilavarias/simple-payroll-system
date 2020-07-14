import HelperModel from "../helper/model";

const EmployeeService = {
  generateCustomID: async () => {
    const error = {};
    const gotAccountTableRowsCount = await HelperModel.countTableRows(
      `account`
    );
    const formattedCustomID = EmployeeService.formatCustomID(
      gotAccountTableRowsCount
    );
    const generatedCustomID = formattedCustomID
      ? formattedCustomID
      : "ACCOUNT-00000";
    return {
      customID: generatedCustomID,
      error,
    };
  },

  formatCustomID: (tableRowsCount: number): string => {
    let lastPart = "";
    if (tableRowsCount >= 0 && tableRowsCount <= 9)
      lastPart = `0000${tableRowsCount}`;
    if (tableRowsCount >= 10 && tableRowsCount <= 99)
      lastPart = `000${tableRowsCount}`;
    if (tableRowsCount >= 100 && tableRowsCount <= 999)
      lastPart = `00${tableRowsCount}`;
    if (tableRowsCount >= 1000 && tableRowsCount <= 9999)
      lastPart = `0${tableRowsCount}`;
    if (tableRowsCount >= 10000) lastPart = `${tableRowsCount}`;
    return `ACCOUNT-${lastPart}`;
  },
};

export default EmployeeService;
