"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authrouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
exports.authrouter = express_1.default.Router();
exports.authrouter.post('/login', auth_controller_1.loginController);
exports.authrouter.post('/register', auth_controller_1.registerController);
