import { Router } from "express";
import messageController from "./messageController";

const app = Router();

app.get("/", messageController.getMsgs);
app.put("/:_id", messageController.isRead);
app.delete("/:_id", messageController.delMsg);

export default app;
