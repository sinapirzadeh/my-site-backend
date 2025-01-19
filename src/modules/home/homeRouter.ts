import { Router } from "express";
import profileController from "./homeController";

const app = Router();

app.get("/profile", profileController.getProfile);
app.get("/projects", profileController.getProjects);
app.get("/article", profileController.getArticles);
app.get("/contact", profileController.postContact);

export default app;
