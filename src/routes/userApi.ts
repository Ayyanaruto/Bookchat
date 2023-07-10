import  { Router } from "express";
import { currentUser,logout } from "../controllers/userApiCt";

const router = Router();

router.get("/current_user", currentUser);

router.get("/logout", logout)

export default router; 