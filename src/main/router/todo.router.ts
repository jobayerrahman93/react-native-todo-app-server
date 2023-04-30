import { Router } from "express";
import { createTodoValidator } from "../../common/middleware/validator/todoValidator";
import {
  createTodoController,
  getAllTodoController,
} from "../controller/todo.controller";

const router = Router();

// create todo router
router
  .route("/")
  .post(createTodoValidator(), createTodoController)
  .get(getAllTodoController);

export default router;
