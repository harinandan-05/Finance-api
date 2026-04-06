import usermodel from "../../models/usermodel";

export const getAllUsers = async () => {
  const users = await usermodel.find().select("-password");

  if (!users) {
    throw new Error("No users found");
  }

  return users;
};


export const updateUserRole = async (userId: string, role: string) => {
  const validRoles = ["viewer", "analyst", "admin"];

  if (!validRoles.includes(role)) {
    throw new Error("Invalid role");
  }

  const updatedUser = await usermodel.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  ).select("-password");

  if (!updatedUser) {
    throw new Error("User not found");
  }

  return updatedUser;
};