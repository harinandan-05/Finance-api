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
const mongoose_1 = require("mongoose");
const connectDb = function connection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = "mongodb+srv://testuserharin:hari2005@cluster0.llwnf.mongodb.net/backend-api";
            yield (0, mongoose_1.connect)(url);
            console.log("mongodb connected successfully");
        }
        catch (err) {
            console.log("database connection error", err);
        }
    });
};
exports.default = connectDb;
