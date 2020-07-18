"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = __importDefault(require("./application"));
application_1.default.listen(process.env.PORT || 3000, () => console.log("Server is running.."));
//# sourceMappingURL=server.js.map