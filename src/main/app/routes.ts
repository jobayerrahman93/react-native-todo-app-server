import { Express } from "express";
import { default as authRouter } from "../../main/router/auth.router";
import { default as todoRouter } from "../../main/router/todo.router";

const Routes = (app: Express) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/todo", todoRouter);
};

export default Routes;
