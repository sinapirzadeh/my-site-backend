import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import serverError from "../errors/serverError";
import logger from "../utils/helperFunc/logger";

const ErrorHandelingMid = (
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof serverError) {
    res.status(error.status).json({
      message: error.message,
    });
  } else {
    res.status(500).json({
      messge: "Internal Server Error",
    });
  }
};

export default ErrorHandelingMid;
