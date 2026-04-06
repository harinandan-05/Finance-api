import { Request, Response } from "express";
import { getAllUsers, updateUserRole } from "./user.service";
import usermodel from "../../models/usermodel";

export const getUsersController = async (req: any, res: Response) => {
  try {
    const users = await getAllUsers();

    return res.status(200).json({
      message: "Users fetched",
      data: users
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message || "Error fetching users"
    });
  }
};


export const updateUserRoleController = async (req: any, res: Response) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({
        message: "Role is required"
      });
    }

    const updatedUser = await updateUserRole(userId, role);

    return res.status(200).json({
      message: "User role updated successfully",
      data: updatedUser
    });
  } catch (err: any) {
    return res.status(400).json({
      message: err.message || "Failed to update role"
    });
  }
};

