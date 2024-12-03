import express from "express";
import {
  getUserProfile,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import isAuth from "../middlewares/isAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/profile", isAuth, getUserProfile);

export default authRouter;
