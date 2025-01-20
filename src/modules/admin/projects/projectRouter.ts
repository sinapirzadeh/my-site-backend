import { Router } from "express";
import projectController from "./projectController";
import multer from "../../../utils/multer";

const app = Router();

app.get("/", projectController.getProjects);

app.post("/", multer.single("image_url"), projectController.addProject);

app.delete("/:_id", projectController.delProject);

export default app;
