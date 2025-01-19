import logger from "./utils/helperFunc/logger";
import helmet from "helmet";
import api from "./modules/baseRouters";
import dbConect from "./config/dbConection";
import ErrorHandelingMid from "./middlewares/errorHandelingMid";
import env from "./config/env";
import limiter from "./middlewares/serverLimitMid";
import performanceLogger from "./middlewares/performanceLogger";
const app = express();
import express from "express";
import cors from "cors";

// <-- midilwares -->
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(performanceLogger);
app.use(ErrorHandelingMid);
app.use(limiter);

// app router
app.use("/api/", api);

// Database Connection
dbConect(env.dbAddress);

app
  .listen(env.serverPort, () =>
    logger.info(`server start on : http://localhost:${env.serverPort}/api/`)
  )
  .on("error", (err: Error) =>
    logger.error(`Failed to start server: ${err.message}`)
  );
