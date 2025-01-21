import { Router } from "express";
import profileController from "./homeController";
import modelValidationMid from "../../middlewares/modelValidationMid";
import homeValidation from "./homeValidation";

const app = Router();

app.get("/profile", profileController.getProfile);
app.get("/skills", profileController.getSkills);
app.get("/projects", profileController.getProjects);
app.get("/article", profileController.getArticles);
app.post(
  "/message",
  homeValidation(),
  modelValidationMid,
  profileController.postContact
);

export default app;
