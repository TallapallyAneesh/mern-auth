import express from "express";
import { signout, test } from "../controllers/userController.js";
import { updateUser } from "../controllers/userController.js";
import { requireSignin } from "../middlewares/UserAuth.js";
const router = express.Router();
router.get("/test", test);
router.post("/update/:id",requireSignin,updateUser);
router.post('/signout',signout);
export default router;
