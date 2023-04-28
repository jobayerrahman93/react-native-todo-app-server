import { Router } from "express";
import { userRegistationValidator } from "../../common/middleware/validator/authValidator";
import { authRegisterController } from "../controller/auth.controller";

const router = Router();

router
  .route("/register")
  .post(userRegistationValidator(), authRegisterController);

export default router;
