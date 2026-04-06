import express from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import { Rolemiddleware } from "../../middleware/role.middleware";
import {
  recordCreateControl,
  recordGetFilterController,
  getRecordbyidController,
  updateRecordController,
  deleteRecorController
} from "./record.controller";

const recordRoute = express.Router();

recordRoute.post(
  "/",
  authMiddleware,
  Rolemiddleware(["admin", "analyst"]),
  recordCreateControl
);


recordRoute.get(
  "/",
  authMiddleware,
  Rolemiddleware(["admin", "analyst", "viewer"]),
  recordGetFilterController
);


recordRoute.get(
  "/:id",
  authMiddleware,
  Rolemiddleware(["admin", "analyst", "viewer"]),
  getRecordbyidController
);


recordRoute.put(
  "/:id",
  authMiddleware,
  Rolemiddleware(["admin", "analyst"]),
  updateRecordController
);


recordRoute.delete(
  "/:id",
  authMiddleware,
  Rolemiddleware(["admin", "analyst"]),
  deleteRecorController
);

export default recordRoute;