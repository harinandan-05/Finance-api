import { Request, Response } from "express";
import { getDashboardSummary } from "./dashboard.service";

export const dashboardController = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const role = req.user.role;

    const data = await getDashboardSummary(userId, role);

    return res.status(200).json({
      message: "Dashboard fetched successfully",
      data
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message || "Failed to fetch dashboard"
    });
  }
};