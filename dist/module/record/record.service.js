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
exports.updateRecord = exports.deleteRecord = exports.getRecordById = exports.getRecord = exports.CreateRecord = void 0;
const record_1 = __importDefault(require("../../models/record"));
const usermodel_1 = __importDefault(require("../../models/usermodel"));
const CreateRecord = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!data || !data.userId) {
        throw new Error("Missing required data");
    }
    const userCheck = yield usermodel_1.default.findById(data.userId);
    if (!userCheck) {
        throw new Error("no user Found");
    }
    const NewRecord = yield record_1.default.create({
        userId: data.userId,
        amount: data.amount,
        type: data.type,
        notes: data.notes,
        catogory: data.catogory
    });
    if (!NewRecord) {
        throw new Error("failed to create new record");
    }
    return NewRecord;
});
exports.CreateRecord = CreateRecord;
const getRecord = (userId, filter) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { userId };
    if (filter.type) {
        query.type = filter.type;
    }
    if (filter.catogory) {
        query.catogory = filter.catogory;
    }
    const records = yield record_1.default.find(query);
    return records;
});
exports.getRecord = getRecord;
const getRecordById = (userId, recordId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const recordFind = yield record_1.default.findById(recordId);
    if (!recordFind) {
        throw new Error("no records found");
    }
    if (((_a = recordFind.userId) === null || _a === void 0 ? void 0 : _a.toString()) !== userId) {
        throw new Error("unauthorized");
    }
    return recordFind;
});
exports.getRecordById = getRecordById;
const deleteRecord = (userId, recordId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const recordFind = yield record_1.default.findById(recordId);
    if (!recordFind) {
        throw new Error("no records found");
    }
    if (((_a = recordFind.userId) === null || _a === void 0 ? void 0 : _a.toString()) !== userId) {
        throw new Error("unauthorized");
    }
    yield record_1.default.findByIdAndDelete(recordId);
    return { message: "record deleted" };
});
exports.deleteRecord = deleteRecord;
const updateRecord = (userId, recordId, data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const recordFind = yield record_1.default.findById(recordId);
    if (!recordFind) {
        throw new Error("no records found");
    }
    if (((_a = recordFind.userId) === null || _a === void 0 ? void 0 : _a.toString()) !== userId) {
        throw new Error("unauthorized");
    }
    const updatedData = {};
    if (data.amount !== undefined)
        updatedData.amount = data.amount;
    if (data.catogory !== undefined)
        updatedData.catogory = data.catogory;
    if (data.notes !== undefined)
        updatedData.notes = data.notes;
    if (data.type !== undefined)
        updatedData.type = data.type;
    const updated = yield record_1.default.findByIdAndUpdate(recordId, updatedData, {
        new: true,
        runValidators: true
    });
    return { message: "record updated", updated };
});
exports.updateRecord = updateRecord;
