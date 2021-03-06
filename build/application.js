"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./api"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./passport"));
const application = express_1.default();
application.use(cors_1.default());
application.use(body_parser_1.default.json());
application.use(body_parser_1.default.urlencoded({ extended: false }));
application.use("/api", api_1.default);
application.use(passport_1.default.initialize());
passport_2.default(passport_1.default);
if (process.env.NODE_ENV === "production") {
    application.use(express_1.default.static(__dirname + "/public/"));
    application.get(/.*/, (request, response) => response.sendFile(__dirname + "/public/index.html"));
}
exports.default = application;
//# sourceMappingURL=application.js.map