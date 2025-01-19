import { Router } from "express";
import userRouter from "./admin/profile/profileRouter";
import homeRouter from "./home/homeRouter";

const app = Router();

app.use("/", homeRouter);

// admin routers
app.use("/admin/profile", userRouter);

export default app;
