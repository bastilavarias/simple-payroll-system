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
const AccountModel = {
    save: (accountForm, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `insert into account (name, username, password, type)
                       values ($1, $2, $3, $4);`;
        const { name, username, type } = accountForm;
        const parameters = [name, username, hashedPassword, type];
        yield database_1.default.execute(query, parameters);
    }),
    fetch: () => __awaiter(void 0, void 0, void 0, function* () {
        const query = `select a.id, a.name, a.username, a.type
                       from account a
                       where a.is_deleted = false
                       order by id asc;`;
        const { rows } = yield database_1.default.execute(query);
        return rows.length > 0 ? rows : [];
    }),
    getInformation: (accountID) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `select a.id, a.name, a.username, a.password, a.type
                       from account a
                       where a.is_deleted = false
                         and a.id = $1;`;
        const parameters = [accountID];
        const { rows } = yield database_1.default.execute(query, parameters);
        return rows.length > 0 ? rows[0] : {};
    }),
    getInformationByUsername: (username) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `select a.id, a.name, a.username, a.password, a.type
                       from account a
                       where a.is_deleted = false
                         and a.username = $1;`;
        const parameters = [username];
        const { rows } = yield database_1.default.execute(query, parameters);
        return rows.length > 0 ? rows[0] : {};
    }),
    update: (accountID, accountForm, newHashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `update account
                       set name     = $1,
                           username = $2,
                           password = $3,
                           type = $4
                       where id = $5;`;
        const { name, username, type } = accountForm;
        const parameters = [name, username, newHashedPassword, type, accountID];
        yield database_1.default.execute(query, parameters);
    }),
    remove: (accountID) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `update account
                       set is_deleted = true,
                           deleted_at = now()
                       where id = $1;`;
        const parameters = [accountID];
        yield database_1.default.execute(query, parameters);
    }),
};
exports.default = AccountModel;
//# sourceMappingURL=model.js.map