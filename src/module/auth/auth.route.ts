import express , { Request , Response } from "express";
import { loginController, registerController } from "./auth.controller";

export const authrouter = express.Router()

authrouter.post('/login',loginController)
authrouter.post('/register',registerController)