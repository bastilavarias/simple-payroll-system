import Database from "../../database";

const HelperModel = {
  countTableRows: async (tableName: string): Promise<number> => {
    const query = `select count(id) from ${tableName};`;
    const { rows } = await Database.execute(query);
    const result = rows[0].count;
    return result ? parseInt(result) : 0;
  },
};

export default HelperModel;
