import { Router } from "express";
import { authController } from "../controller/auth.controller";
const router = Router();

router.post("/register", authController);

export default router;
