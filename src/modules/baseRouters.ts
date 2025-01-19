import { Router } from "express";
import homeRouter from "./home/homeRouter";
import profileRouter from "./admin/profile/profileRouter";
import skillRouter from "./admin/skill/skillRouter";

const app = Router();

app.use("/", homeRouter);

// admin routers
app.use("/admin/profile", profileRouter);
app.use("/admin/skill", skillRouter);

export default app;
