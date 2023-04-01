import { Request, Response } from "express";
import { authService } from "../service/auth.service";

const authController = async (req: Request, res: Response) => {
  const data = authService(req);

  if (data.success) {
    res.status(200).json(data);
  } else {
    res.status(400).json(data);
  }
};

export { authController };
