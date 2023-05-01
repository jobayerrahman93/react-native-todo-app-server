import { body } from "express-validator";

//  create todo validator
const createTodoValidator = () => {
  return [
    body("todo_title", "Provide todo title").exists().notEmpty(),
    body("todo_description", "Provide todo details").exists().notEmpty(),
    body("user_id", "Provide user id").isInt().exists().notEmpty(),
  ];
};

export { createTodoValidator };
