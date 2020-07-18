import Database from "../../database";
import { DepartmentForm, DepartmentInformation } from "./type";

const DepartmentModel = {
  save: async (departmentForm: DepartmentForm) => {
    const query = `insert into department (name, description)
                       values ($1, $2);`;
    const { name, description } = departmentForm;
    const parameters = [name, description];
    await Database.execute(query, parameters);
  },

  fetch: async () => {
    const query = `select d.id, d.name, d.description
                       from department d
                       where d.is_deleted = false
                       order by id asc;`;
    const { rows } = await Database.execute(query);
    return rows.length > 0 ? rows : [];
  },

  getInformation: async (
    departmentID: number
  ): Promise<DepartmentInformation> => {
    const query = `select d.id, d.name, d.description
                       from department d
                       where d.is_deleted = false
                         and d.id = $1;`;
    const parameters = [departmentID];
    const { rows } = await Database.execute(query, parameters);
    return rows.length > 0 ? rows[0] : {};
  },

  update: async (departmentID: number, departmentForm: DepartmentForm) => {
    const query = `update department
                       set name        = $1,
                           description = $2
                       where id = $3;`;
    const { name, description } = departmentForm;
    const parameters = [name, description, departmentID];
    await Database.execute(query, parameters);
  },

  remove: async (departmentID: number) => {
    const query = `update department
                       set is_deleted = true,
                           deleted_at = now()
                       where id = $1;`;
    const parameters = [departmentID];
    await Database.execute(query, parameters);
  },
};

export default DepartmentModel;
