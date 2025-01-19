import express from "express";
import cors from "cors";
import helmet from "helmet";
import api from "./modules/baseRouters";
import dbConect from "./config/dbConection";
import ErrorHandelingMid from "./middlewares/errorHandelingMid";
import env from "./config/env";
import limiter from "./middlewares/serverLimitMid";

const app = () => {
  const app = express();

  // <-- midilwares -->
  app.use(cors());
  app.use(express.json());
  app.use(helmet());
  app.use(ErrorHandelingMid);
  app.use(limiter);

  // app router
  app.use("/api/", api);

  // Database Connection
  dbConect(env.dbAddress);

  return app;
};

export default app;
