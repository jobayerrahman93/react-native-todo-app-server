import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Handle error
  console.error(err);

  // Set response body
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
    type: err.type,
    status: err.status,
  });
};
