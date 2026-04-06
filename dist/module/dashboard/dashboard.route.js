"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../../middleware/auth.middleware");
const dashboard_controller_1 = require("./dashboard.controller");
const role_middleware_1 = require("../../middleware/role.middleware");
const dashboardRoute = express_1.default.Router();
dashboardRoute.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.Rolemiddleware)(['admin', 'analyst', 'viewer']), dashboard_controller_1.dashboardController);
exports.default = dashboardRoute;
