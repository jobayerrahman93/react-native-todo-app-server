import { Request } from "express";

const authService = async (req: Request) => {
  return {
    success: true,
    message: "You are getting auth service",
  };
};

export { authService };
