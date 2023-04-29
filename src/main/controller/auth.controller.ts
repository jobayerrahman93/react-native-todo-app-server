import { Request, Response } from "express";
import AssyncWrapper from "../../common/middleware/assyncWrapper/assyncWrapper";
import error from "../../common/utils/error/responseError";
import { authLoginService, authRegisterService } from "../service/auth.service";

// registration controller
const authRegisterController = AssyncWrapper(
  async (req: Request, res: Response) => {
    const data = await authRegisterService(req);

    if (data.success) {
      res.status(200).json(data);
    } else {
      error(data.message, 422);
    }
  }
);

// login controller
const authLoginController = AssyncWrapper(
  async (req: Request, res: Response) => {
    const data = await authLoginService(req);

    if (data.success) {
      res.status(200).json(data);
    } else {
      error(data.message, 422);
    }
  }
);

export { authRegisterController, authLoginController };
