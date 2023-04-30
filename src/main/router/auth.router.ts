import { Router } from "express";
import {
  userLoginValidator,
  userRegistationValidator,
} from "../../common/middleware/validator/authValidator";
import {
  authLoginController,
  authRegisterController,
} from "../controller/auth.controller";

const router = Router();

// registration
router
  .route("/register")
  .post(userRegistationValidator(), authRegisterController);

// login
router.route("/login").post(userLoginValidator(), authLoginController);

export default router;
