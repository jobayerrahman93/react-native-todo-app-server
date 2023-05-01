import { Router } from "express";
import { singleParamInputValidation } from "../../common/middleware/validator/commonValidator";
import {
  createTodoController,
  getAllTodoController,
  getSingleTodoController,
  updateSingleTodoController,
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
  )
  .patch(
    singleParamInputValidation("id", "Provide todo id"),
    updateSingleTodoController
  );
export default router;
