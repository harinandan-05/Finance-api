"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../../middleware/auth.middleware");
const role_middleware_1 = require("../../middleware/role.middleware");
const user_controller_1 = require("./user.controller");
const userRouter = express_1.default.Router();
userRouter.get('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.Rolemiddleware)(['admin']), user_controller_1.getUsersController);
userRouter.put('/:id/role', auth_middleware_1.authMiddleware, (0, role_middleware_1.Rolemiddleware)(['admin']), user_controller_1.updateUserRoleController);
exports.default = userRouter;
