import { NextFunction, Request, Response } from "express";
import validateRequestBody from "../utils/validateRequestBody";

const modelValidationMid = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!validateRequestBody(req, res)) return;
  next();
};

export default modelValidationMid;