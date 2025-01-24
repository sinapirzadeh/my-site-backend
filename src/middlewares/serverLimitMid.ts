import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, // limit for 15 min
  message: "15 دقیقه بعد دوباره تلاش کنید",
});

export default limiter;
