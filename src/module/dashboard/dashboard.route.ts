import express from "express";
import { authMiddleware } from "../../middleware/auth.middleware";
import { dashboardController } from "./dashboard.controller";
import { Rolemiddleware } from "../../middleware/role.middleware";

const dashboardRoute = express.Router();

dashboardRoute.get(
  "/",
  authMiddleware,
  Rolemiddleware(['admin','analyst','viewer']),
  dashboardController
);

export default dashboardRoute;