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
exports.updateRecordController = exports.deleteRecorController = exports.getRecordbyidController = exports.recordGetFilterController = exports.recordCreateControl = void 0;
const record_service_1 = require("./record.service");
const recordCreateControl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = Object.assign(Object.assign({}, req.body), { userId: req.user.id });
    const result = yield (0, record_service_1.CreateRecord)(data);
    if (!result) {
        return res.status(400).json({ msg: "not able to process the request" });
    }
    return res.status(200).json({ msg: "record created successfully", data: result });
});
exports.recordCreateControl = recordCreateControl;
const recordGetFilterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, record_service_1.getRecord)(req.user.id, req.query);
    if (!result) {
        return res.status(400).json({ msg: "not able to process request" });
    }
    return res.status(200).json({ msg: "record fetched succefully", data: result });
});
exports.recordGetFilterController = recordGetFilterController;
const getRecordbyidController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, record_service_1.getRecordById)(req.user.id, req.params.recordId);
    if (!result) {
        return res.status(400).json({ msg: "not able to process request" });
    }
    return res.status(200).json({ msg: "record fetched succefully by id", data: result });
});
exports.getRecordbyidController = getRecordbyidController;
const deleteRecorController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, record_service_1.deleteRecord)(req.user.id, req.params.recordId);
    if (!result) {
        return res.status(400).json({ msg: "not able to process request" });
    }
    return res.status(200).json({ msg: "record deleted succefully by id", data: result });
});
exports.deleteRecorController = deleteRecorController;
const updateRecordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, record_service_1.updateRecord)(req.user.id, req.params.recordId, req.body);
    if (!result) {
        return res.status(400).json({ msg: "not able to process request" });
    }
    return res.status(200).json({ msg: "record updated succefully by id", data: result });
});
exports.updateRecordController = updateRecordController;
