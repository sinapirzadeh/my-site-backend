import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import api from "./modules/baseRouters";
import dbConect from "./config/dbConection";
import ErrorHandelingMid from "./middlewares/errorHandelingMid";
import env from "./config/env";
import limiter from "./middlewares/serverLimitMid";
import ip from "./models/ips";

const app = () => {
  const app = express();

  // <-- middlewares -->
  // app.use(cors({ origin: ["https://example.com", "https://another.com"] }));
  app.use(cors());
  app.use(express.json());
  app.use(helmet());
  app.use(ErrorHandelingMid);
  app.use(limiter);
  // app.set("trust proxy", true);

  // Middleware for IP tracking
  app.use(async (req: Request, res: Response, next: NextFunction) => {
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
  });

  // Routes
  app.use("/api/", api);

  // Database Connection
  dbConect(env.dbAddress);

  return app;
};

export default app;
