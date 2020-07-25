"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const model_1 = __importDefault(require("../account/model"));
const service_1 = __importDefault(require("../utility/service"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthenticationService = {
    login: (loginFormClientInput) => __awaiter(void 0, void 0, void 0, function* () {
        let bearerToken = "";
        const error = { username: "", password: "" };
        const gotAccountInformation = yield model_1.default.getInformationByUsername(loginFormClientInput.username);
        const isUsernameFound = Object.keys(gotAccountInformation).length > 0;
        if (!isUsernameFound) {
            error.username = "Username not found.";
            return {
                token: bearerToken,
                error,
            };
        }
        const isPasswordValid = yield service_1.default.compareHashPassword(loginFormClientInput.password, gotAccountInformation.password);
        if (!isPasswordValid) {
            error.password = "Invalid password.";
            return {
                token: bearerToken,
                error,
            };
        }
        delete gotAccountInformation.password;
        const gotAccountActions = AuthenticationService.getAccountActions(gotAccountInformation.type);
        const signedJWT = jsonwebtoken_1.default.sign(JSON.parse(JSON.stringify({
            account: gotAccountInformation,
            actions: gotAccountActions,
        })), process.env.AUTH_SECRET_OR_KEY);
        bearerToken = `Bearer ${signedJWT}`;
        return {
            token: bearerToken,
            error,
        };
    }),
    getAuthenticatedCredentials: (token) => __awaiter(void 0, void 0, void 0, function* () {
        const { account } = token;
        const gotAccountInformation = yield model_1.default.getInformation(account.id);
        delete gotAccountInformation.password;
        const gotAccountActions = AuthenticationService.getAccountActions(gotAccountInformation.type);
        const signedJWT = jsonwebtoken_1.default.sign(JSON.parse(JSON.stringify({
            account: gotAccountInformation,
            actions: gotAccountActions,
        })), process.env.AUTH_SECRET_OR_KEY);
        const bearerToken = `Bearer ${signedJWT}`;
        return {
            token: bearerToken,
        };
    }),
    getAccountActions: (accountType) => {
        let actions = [];
        const staffActions = [
            {
                text: "Payroll",
                icon: "mdi-database",
                to: { name: "payroll" },
            },
            {
                text: "Report",
                icon: "mdi-file-chart",
                to: { name: "report" },
            },
        ];
        switch (accountType) {
            case "Staff":
                actions = staffActions;
                break;
            case "Administrator":
                actions = [
                    {
                        text: "Employees",
                        icon: "mdi-account-tie",
                        to: { name: "employee-table" },
                    },
                    {
                        text: "Departments",
                        icon: "mdi-dock-window",
                        to: { name: "department-table" },
                    },
                    {
                        text: "Designations",
                        icon: "mdi-briefcase-account",
                        to: { name: "designation-table" },
                    },
                    {
                        text: "Accounts",
                        icon: "mdi-account-multiple",
                        to: { name: "account-table" },
                    },
                    ...staffActions,
                ];
                break;
            default:
                actions = staffActions;
                break;
        }
        return actions;
    },
};
exports.default = AuthenticationService;
//# sourceMappingURL=service.js.map