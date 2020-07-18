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
const DesignationModel = {
    save: (designationForm) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `insert into designation (name, description, daily_salary)
                       values ($1, $2, $3);`;
        const { name, description, dailySalary } = designationForm;
        const parameters = [name, description, dailySalary];
        yield database_1.default.execute(query, parameters);
    }),
    fetch: () => __awaiter(void 0, void 0, void 0, function* () {
        const query = `select d.id, d.name, d.description, d.daily_salary "dailySalary"
                       from designation d
                       where d.is_deleted = false
                       order by id asc;`;
        const { rows } = yield database_1.default.execute(query);
        return rows.length > 0 ? rows : [];
    }),
    getInformation: (designationID) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `select d.id, d.name, d.description, d.daily_salary "dailySalary"
                       from designation d
                       where d.is_deleted = false
                         and d.id = $1;`;
        const parameters = [designationID];
        const { rows } = yield database_1.default.execute(query, parameters);
        return rows.length > 0 ? rows[0] : {};
    }),
    update: (designationID, designationForm) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `update designation
                       set name         = $1,
                           description  = $2,
                           daily_salary = $3
                       where id = $4;`;
        const { name, description, dailySalary } = designationForm;
        const parameters = [name, description, dailySalary, designationID];
        yield database_1.default.execute(query, parameters);
    }),
    remove: (designationID) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `update designation
                       set is_deleted = true,
                           deleted_at = now()
                       where id = $1;`;
        const parameters = [designationID];
        yield database_1.default.execute(query, parameters);
    }),
};
exports.default = DesignationModel;
//# sourceMappingURL=model.js.map