"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const DepartmentModel = {
    save: (departmentForm) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `insert into department (name, description)
                       values ($1, $2);`;
        const { name, description } = departmentForm;
        const parameters = [name, description];
        yield database_1.default.execute(query, parameters);
    }),
    fetch: () => __awaiter(void 0, void 0, void 0, function* () {
        const query = `select d.id, d.name, d.description
                       from department d
                       where d.is_deleted = false
                       order by id asc;`;
        const { rows } = yield database_1.default.execute(query);
        return rows.length > 0 ? rows : [];
    }),
    getInformation: (departmentID) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `select d.id, d.name, d.description
                       from department d
                       where d.is_deleted = false
                         and d.id = $1;`;
        const parameters = [departmentID];
        const { rows } = yield database_1.default.execute(query, parameters);
        return rows.length > 0 ? rows[0] : {};
    }),
    update: (departmentID, departmentForm) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `update department
                       set name        = $1,
                           description = $2
                       where id = $3;`;
        const { name, description } = departmentForm;
        const parameters = [name, description, departmentID];
        yield database_1.default.execute(query, parameters);
    }),
    remove: (departmentID) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `update department
                       set is_deleted = true,
                           deleted_at = now()
                       where id = $1;`;
        const parameters = [departmentID];
        yield database_1.default.execute(query, parameters);
    }),
};
exports.default = DepartmentModel;
//# sourceMappingURL=model.js.map