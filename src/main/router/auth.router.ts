import { Router } from "express";
import { userRegistationValidator } from "../../common/middleware/validator/authValidator";
import { authController } from "../controller/auth.controller";
const router = Router();

router.route("/register").post(userRegistationValidator(), authController);

export default router;
