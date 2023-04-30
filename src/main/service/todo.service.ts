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
  const data = await db("todos").select("*");

  return {
    success: true,
    data,
  };
};

export { createTodoService, getAllTodoService };
