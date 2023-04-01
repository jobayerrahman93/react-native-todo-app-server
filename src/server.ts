import cors from "cors";
import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import { errorHandler } from "./common/middleware/errorHandler/errorHandler";
import CustomError from "./common/utils/error/customError";
import { default as AuthRouter } from "./main/router/auth.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6000;
app.use(cors());

app.use("/api/v1/auth", AuthRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running..");
});

// 404 error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new CustomError("Cannot find the route", 404, "Invalid route");
  next(err);
});

// Add error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
