import  { Router } from "express";
import { currentUser,logout } from "../controllers/userApi";
import { requireLogin } from "../middlewares/requireLogin";

const router = Router();

router.get("/current_user",currentUser);

router.get("/logout", requireLogin, logout);

export default router; 