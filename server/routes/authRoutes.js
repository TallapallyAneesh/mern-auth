import express from "express";
import {
  signup,
  signin,
  signout,
  sendVerifyOtp,
  verifyEmail,
  sendResetOtp,
  resetPassword,
} from "../controllers/authController.js";
import { requireSignin } from "../middlewares/UserAuth.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/send-verify-otp", requireSignin, sendVerifyOtp);
router.get("/verify-email", requireSignin, verifyEmail);
router.post("/send-reset-otp", sendResetOtp);
router.post("/reset-password", resetPassword);

export default router;
