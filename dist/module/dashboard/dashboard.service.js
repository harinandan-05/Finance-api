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
exports.getDashboardSummary = void 0;
const record_1 = __importDefault(require("../../models/record"));
const getDashboardSummary = (userId, role) => __awaiter(void 0, void 0, void 0, function* () {
    const match = {};
    if (role !== "admin") {
        match.userId = userId;
    }
    const summary = yield record_1.default.aggregate([
        { $match: match },
        {
            $group: {
                _id: "$type",
                total: { $sum: "$amount" }
            }
        }
    ]);
    let totalIncome = 0;
    let totalExpense = 0;
    summary.forEach((item) => {
        if (item._id === "income")
            totalIncome = item.total;
        if (item._id === "expense")
            totalExpense = item.total;
    });
    const balance = totalIncome - totalExpense;
    const categories = yield record_1.default.aggregate([
        { $match: match },
        {
            $group: {
                _id: "$category",
                total: { $sum: "$amount" }
            }
        }
    ]);
    const categoryData = categories.map((item) => ({
        category: item._id,
        total: item.total
    }));
    const recent = yield record_1.default
        .find(match)
        .sort({ createdAt: -1 })
        .limit(5);
    return {
        summary: {
            totalIncome,
            totalExpense,
            balance
        },
        categories: categoryData,
        recent
    };
});
exports.getDashboardSummary = getDashboardSummary;
