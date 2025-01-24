import express from "express";
import cors from "cors";
import helmet from "helmet";
import api from "./modules/baseRouters";
import dbConect from "./config/dbConection";
import ErrorHandelingMid from "./middlewares/errorHandelingMid";
import env from "./config/env";
import limiter from "./middlewares/serverLimitMid";
import ip from "./models/ips";
import ipSet from "./middlewares/ipSetMid";

const app = () => {
  const app = express();

  // <-- middlewares -->
  app.use(
    cors({ origin: ["https://sinapirzadeh.ir", "http://localhost:3000"] })
  );
  app.use(express.json());
  app.use(helmet());
  app.use(ErrorHandelingMid);
  app.use(limiter);
  app.use(ipSet);

  // Routes
  app.use("/api/", api);

  // Database Connection
  dbConect(env.dbAddress);

  return app;
};

export default app;
