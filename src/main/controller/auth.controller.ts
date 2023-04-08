import { Request, Response } from "express";
import AssyncWrapper from "../../common/middleware/assyncWrapper/assyncWrapper";
import error from "../../common/utils/error/responseError";
import { authService } from "../service/auth.service";

const authController = AssyncWrapper(async (req: Request, res: Response) => {
  const data = await authService(req);

  if (data.success) {
    res.status(200).json(data);
  } else {
    error(data.message, 422);
  }
});

export { authController };
