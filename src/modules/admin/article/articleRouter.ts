import { Router } from "express";
import multer from "../../../utils/multer";
import articleController from "./articleController";

const app = Router();

app.get("/", articleController.getAll);
app.post("/", multer.single("image"), articleController.add);
app.get("/:_id", articleController.getById);
app.put("/:_id", articleController.edit);
app.delete("/:_id", articleController.del);

export default app;
