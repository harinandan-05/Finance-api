"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../../middleware/auth.middleware");
const role_middleware_1 = require("../../middleware/role.middleware");
const record_controller_1 = require("./record.controller");
const recordRoute = express_1.default.Router();
recordRoute.post("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.Rolemiddleware)(["admin", "analyst"]), record_controller_1.recordCreateControl);
recordRoute.get("/", auth_middleware_1.authMiddleware, (0, role_middleware_1.Rolemiddleware)(["admin", "analyst", "viewer"]), record_controller_1.recordGetFilterController);
recordRoute.get("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.Rolemiddleware)(["admin", "analyst", "viewer"]), record_controller_1.getRecordbyidController);
recordRoute.put("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.Rolemiddleware)(["admin", "analyst"]), record_controller_1.updateRecordController);
recordRoute.delete("/:id", auth_middleware_1.authMiddleware, (0, role_middleware_1.Rolemiddleware)(["admin", "analyst"]), record_controller_1.deleteRecorController);
exports.default = recordRoute;
