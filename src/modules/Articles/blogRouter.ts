import { Router } from "express";
import blogController from "./blogController";

const app = Router();

app.get("/", blogController.all);
app.get("/:slug", blogController.slug);

export default app;
