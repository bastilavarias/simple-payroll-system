import Database from "../../database";
import { DesignationForm, DesignationInformation } from "./type";

const DesignationModel = {
  save: async (designationForm: DesignationForm) => {
    const query = `insert into designation (name, description, daily_salary)
                       values ($1, $2, $3);`;
    const { name, description, dailySalary } = designationForm;
    const parameters = [name, description, dailySalary];
    await Database.execute(query, parameters);
  },

  fetch: async () => {
    const query = `select d.id, d.name, d.description, d.daily_salary "dailySalary"
                       from designation d
                       where d.is_deleted = false
                       order by id asc;`;
    const { rows } = await Database.execute(query);
    return rows.length > 0 ? rows : [];
  },

  getInformation: async (
    designationID: number
  ): Promise<DesignationInformation> => {
    const query = `select d.id, d.name, d.description, d.daily_salary "dailySalary"
                       from designation d
                       where d.is_deleted = false
                         and d.id = $1;`;
    const parameters = [designationID];
    const { rows } = await Database.execute(query, parameters);
    return rows.length > 0 ? rows[0] : {};
  },

  update: async (designationID: number, designationForm: DesignationForm) => {
    const query = `update designation
                       set name         = $1,
                           description  = $2,
                           daily_salary = $3
                       where id = $4;`;
    const { name, description, dailySalary } = designationForm;
    const parameters = [name, description, dailySalary, designationID];
    await Database.execute(query, parameters);
  },

  remove: async (designationID: number) => {
    const query = `update designation
                       set is_deleted = true,
                           deleted_at = now()
                       where id = $1;`;
    const parameters = [designationID];
    await Database.execute(query, parameters);
  },
};

export default DesignationModel;
