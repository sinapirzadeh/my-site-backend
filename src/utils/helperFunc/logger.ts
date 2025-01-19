import winston from "winston";

export default winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level} : ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf((info) => `${info.level} : ${info.message}`)
      ),
    }),
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
      maxsize: 524880,
      maxFiles: 4,
    }),
    new winston.transports.File({
      filename: "./logs/info.log",
      level: "info",
      maxsize: 524880,
      maxFiles: 4,
    }),
    new winston.transports.File({
      filename: "./logs/warn.log",
      level: "warn",
      maxsize: 524880,
      maxFiles: 4,
    }),
  ],
});
