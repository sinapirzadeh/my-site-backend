import { Router } from "express";
import profileController from "./profileController";
import profileValidation from "./profileValidation";
import multer from "../../../utils/multer";
import modelValidationMid from "../../../middlewares/modelValidationMid";

const app = Router();

app.get("/", profileController.getProfile);

app.post(
  "/update",
  multer.single("image_url"),
  profileValidation(),
  modelValidationMid,
  profileController.createProfile
);

export default app;
