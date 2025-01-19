import app from "./app";
import env from "./config/env";
import logger from "./utils/logger";

const server = app();

server
  .listen(env.serverPort, () =>
    logger.info(`server start on : http://localhost:${env.serverPort}/api/`)
  )
  .on("error", (err: Error) =>
    logger.error(`Failed to start server: ${err.message}`)
  );
