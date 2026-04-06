"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const recordSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    amount: { type: Number, require: true },
    type: { type: String, enum: ["expense", "income"] },
    catogory: String,
    date: { type: Date, default: Date.now },
    notes: String
});
exports.default = mongoose_1.default.model("Record", recordSchema);
