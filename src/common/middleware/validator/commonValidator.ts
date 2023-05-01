import { param } from "express-validator";

const singleParamInputValidation = (id: string, msg: string = "Provide id") => {
  return [param(id, msg)];
};

export { singleParamInputValidation };
