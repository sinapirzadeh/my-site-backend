import { Router } from "express";
import skillController from "./skillController";
import modelValidationMid from "../../../middlewares/modelValidationMid";
import skillValidation from "./skillValidation";

const app = Router();

app.get("/", skillController.getSkills);

app.post(
  "/",
  modelValidationMid,
  skillValidation(),
  skillController.createSkill
);

app.delete("/:id", skillController.delSkill);

export default app;
