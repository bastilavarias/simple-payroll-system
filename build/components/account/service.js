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
const service_1 = __importDefault(require("../utility/service"));
const model_1 = __importDefault(require("./model"));
const AccountService = {
    save: (accountForm) => __awaiter(void 0, void 0, void 0, function* () {
        let message = "";
        const error = { username: "" };
        const gotAccountInformation = yield model_1.default.getInformationByUsername(accountForm.username);
        const isAccountUsernameExists = Object.keys(gotAccountInformation).length > 0;
        if (isAccountUsernameExists) {
            error.username = "Username already exists.";
            return {
                error,
                message,
            };
        }
        const hashedPassword = yield service_1.default.hashPassword(accountForm.password);
        yield model_1.default.save(accountForm, hashedPassword);
        message = "Account was successfully saved.";
        return {
            error,
            message,
        };
    }),
    fetch: () => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const accounts = yield model_1.default.fetch();
        return {
            accounts,
            error,
        };
    }),
    getInformation: (accountID) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const gotAccountInformation = yield model_1.default.getInformation(accountID);
        delete gotAccountInformation.password;
        return {
            information: gotAccountInformation,
            error,
        };
    }),
    update: (accountID, accountForm) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        let message = "";
        const gotAccountInformation = yield model_1.default.getInformation(accountID);
        let newHashedPassword = gotAccountInformation.password;
        if (accountForm.password) {
            newHashedPassword = yield service_1.default.hashPassword(accountForm.password);
        }
        yield model_1.default.update(accountID, accountForm, newHashedPassword);
        message = "Account was successfully updated.";
        return {
            error,
            message,
        };
    }),
    remove: (accountID) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        let message = "Account was successfully removed.";
        yield model_1.default.remove(accountID);
        return {
            error,
            message,
        };
    }),
};
exports.default = AccountService;
//# sourceMappingURL=service.js.map