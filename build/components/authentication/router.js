"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const passport_1 = __importDefault(require("passport"));
const AuthenticationRouter = express_1.default.Router();
AuthenticationRouter.post("/", controller_1.default.login);
AuthenticationRouter.get("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getAuthenticatedCredentials);
exports.default = AuthenticationRouter;
//# sourceMappingURL=router.js.map