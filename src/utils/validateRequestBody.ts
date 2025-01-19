import { Request, Response } from "express";
import { validationResult } from "express-validator";

const validateRequestBody = (req: Request, res: Response): boolean => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map((err) => err.msg);
    res.status(400).json({
      message: "Validation error",
      data: messages,
    });
    return false;
  }
  return true;
};

export default validateRequestBody;
