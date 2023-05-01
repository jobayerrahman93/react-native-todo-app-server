import { Router } from "express";
import { singleParamInputValidation } from "../../common/middleware/validator/commonValidator";
import {
  createTodoController,
  getAllTodoController,
  getSingleTodoController,
} from "../controller/todo.controller";
import { createTodoValidator } from "../validator/todoValidator";

const router = Router();

// create todo router
router
  .route("/")
  .post(createTodoValidator(), createTodoController)
  .get(getAllTodoController);

// get single todo

router
  .route("/:id")
  .get(
    singleParamInputValidation("id", "Provide todo id"),
    getSingleTodoController
  );
export default router;
