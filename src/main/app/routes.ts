import { Express } from "express";
import { default as AuthRouter } from "../../main/router/auth.router";

const Routes = (app: Express) => {
  app.use("/api/v1/auth", AuthRouter);
};

export default Routes;
