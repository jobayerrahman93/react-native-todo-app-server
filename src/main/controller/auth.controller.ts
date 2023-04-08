import { Request, Response } from "express";
import AssyncWrapper from "../../common/middleware/assyncWrapper/assyncWrapper";
import { authService } from "../service/auth.service";

const authController = AssyncWrapper(async (req: Request, res: Response) => {
  const data = await authService(req);

  if (data.success) {
    res.status(200).json(data);
  } else {
    res.status(400).json(data);
  }
});

export { authController };
