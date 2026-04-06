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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.userRegister = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usermodel_1 = __importDefault(require("../../models/usermodel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRegister = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!data.name || !data.email || !data.password) {
            throw new Error("Missing required fields");
        }
        const Existing = yield usermodel_1.default.find({
            email: data.email.toLowerCase()
        });
        if (Existing) {
            throw new Error("user already exist");
        }
        const hashedPass = yield bcrypt_1.default.hash(data.password, 10);
        const newUser = yield usermodel_1.default.create({
            name: data.name,
            email: data.email.toLowerCase(),
            password: hashedPass,
        });
        return newUser;
    }
    catch (err) {
        throw new Error(err.message || "user registratrion failed");
    }
});
exports.userRegister = userRegister;
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!data.email || !data.password) {
            throw new Error("Missing required fields");
        }
        const user = yield usermodel_1.default.findOne({
            email: data.email.toLowerCase()
        });
        if (!user) {
            throw new Error("user doesnt exist with this emailId");
        }
        const isMatch = yield bcrypt_1.default.compare(data.password, user.password);
        if (!isMatch) {
            throw new Error("password is not correct");
        }
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_SECRET, { expiresIn: "1d" });
        const safeReturn = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };
        return {
            token,
            safeReturn
        };
    }
    catch (err) {
        throw new Error(err.message || "login failed");
    }
});
exports.loginUser = loginUser;
