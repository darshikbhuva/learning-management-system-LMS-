import express from "express";
import {
  getUserProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuth from "../middlewares/isAuth.js";
import upload from "../utils/multer.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/logout", logout);
authRouter.get("/profile", isAuth, getUserProfile);
authRouter.put(
  "/profile/update",
  isAuth,
  upload.single("profilePhoto"),
  updateProfile
);

export default authRouter;
