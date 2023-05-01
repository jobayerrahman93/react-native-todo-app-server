import { Request } from "express";
import { db } from "../app/database";

// create todo service
const createTodoService = async (req: Request) => {
  const res = await db("todos").insert(req.body);

  if (res.length) {
    return {
      success: true,
      message: "Successfully todo created",
    };
  }

  return {
    success: false,
    message: "Todo cannot create now",
  };
};

// get all todo service
const getAllTodoService = async (req: Request) => {
  const { user_id } = req.query;
  const data = await db("todos")
    .select("todo_id", "todo_title", "todo_description")
    .where({ user_id });

  return {
    success: true,
    data,
  };
};
// get single todo service
const getSingleTodoService = async (req: Request) => {
  const { id } = req.params;
  const data = await db("todos").select("*").where({ todo_id: id });
  if (data.length) {
    return {
      success: true,
      data: data[0],
    };
  }
  return {
    success: false,
    message: "Todo not found with this id",
  };
};

// update single todo service
const updateSingleTodoService = async (req: Request) => {
  const { id } = req.params;
  const res = await db("todos").update(req.body).where({ todo_id: id });
  if (res) {
    return {
      success: true,
      message: "Todo updated successfully",
    };
  }
  return {
    success: false,
    message: "Cannot update todo at this moment",
  };
};

export {
  createTodoService,
  getAllTodoService,
  getSingleTodoService,
  updateSingleTodoService,
};
