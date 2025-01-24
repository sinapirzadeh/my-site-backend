import { Request, Response, NextFunction } from "express";
import ip from "../models/ips";

const ipSet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userIp =
      (req.headers["x-forwarded-for"] as string) ||
      req.socket.remoteAddress ||
      null;

    const existingIp = await ip.findOne({ ip: userIp });

    if (!existingIp) {
      await ip.create({ ip: userIp });
    }
  } finally {
    next();
  }
};

export default ipSet;
