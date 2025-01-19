import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

const performanceLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.time(req.path);
  res.on("finish", () => {
    console.timeEnd(req.path);
    logger.info(`Time taken for ${req.path} is ${res.get("X-Response-Time")}`);
  });
};

export default performanceLogger;
