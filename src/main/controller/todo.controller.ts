import { Request, Response } from "express";
import AssyncWrapper from "../../common/middleware/assyncWrapper/assyncWrapper";
import error from "../../common/utils/error/responseError";
import { createTodoService, getAllTodoService } from "../service/todo.service";

// todo create controller
const createTodoController = AssyncWrapper(
  async (req: Request, res: Response) => {
    const data = await createTodoService(req);

    if (data.success) {
      res.status(200).json(data);
    } else {
      error(data.message, 422);
    }
  }
);

// get all todo controller
const getAllTodoController = AssyncWrapper(
  async (req: Request, res: Response) => {
    const data = await getAllTodoService(req);

    if (data.success) {
      res.status(200).json(data);
    } else {
      res.status(400).json(data);
    }
  }
);

export { createTodoController, getAllTodoController };
