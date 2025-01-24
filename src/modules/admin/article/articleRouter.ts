import { Router } from "express";
import multer from "../../../utils/multer";
import articleController from "./articleController";

const app = Router();

app.get("/", articleController.getAll);
app.post("/", multer.single("image"), articleController.add);
app.get("/:_id", articleController.getById);
app.put("/:_id", articleController.edit);
app.delete("/:_id", articleController.del);
app.get("/:_id", articleController.getComments);
app.put("/comment/:_id", articleController.commentEdit);
app.delete("/comment/:_id", articleController.delComment);

export default app;
