import cors from "cors";
import dotenv from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import config from "./common/config/config";
import ErrorHandler from "./common/middleware/errorHandler/errorHandler";
import CustomError from "./common/utils/error/customError";
import Routes from "./main/app/routes";

dotenv.config();
const app: Express = express();
const port = config.PORT || 6000;
app.use(express.json());
app.use(cors());

// all routes
const route = () => {
  Routes(app);
};
route();

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running..");
});

// 404 error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new CustomError("Cannot find the route", 404, "Invalid route");
  next(err);
});

// Add error handling middleware
app.use(new ErrorHandler().handleErrors);

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
});
