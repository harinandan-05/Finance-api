"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./module/auth/auth.route");
const dashboard_route_1 = __importDefault(require("./module/dashboard/dashboard.route"));
const record_route_1 = __importDefault(require("./module/record/record.route"));
const user_route_1 = __importDefault(require("./module/user/user.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/user', user_route_1.default);
app.use('/api/v1/auth', auth_route_1.authrouter);
app.use('/api/v1/dashboard', dashboard_route_1.default);
app.use('/api/v1/record', record_route_1.default);
exports.default = app;
