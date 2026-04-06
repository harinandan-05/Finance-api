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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserRoleController = exports.getUsersController = void 0;
const user_service_1 = require("./user.service");
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getAllUsers)();
        return res.status(200).json({
            message: "Users fetched",
            data: users
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err.message || "Error fetching users"
        });
    }
});
exports.getUsersController = getUsersController;
const updateUserRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const { role } = req.body;
        if (!role) {
            return res.status(400).json({
                message: "Role is required"
            });
        }
        const updatedUser = yield (0, user_service_1.updateUserRole)(userId, role);
        return res.status(200).json({
            message: "User role updated successfully",
            data: updatedUser
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err.message || "Failed to update role"
        });
    }
});
exports.updateUserRoleController = updateUserRoleController;
