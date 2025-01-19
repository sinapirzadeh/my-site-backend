import { Router } from "express";
import modelValidation from "../../../middlewares/modelValidationMid";
import profileController from "./profileController";
import profileValidation from "./profileValidation";
import multer from "../../../utils/helperFunc/multer";

const app = Router();

app.get("/", profileController.getUsers);

app.post(
  "/update",
  multer.single("image_url"),
  modelValidation,
  profileValidation(),
  profileController.createUser
);

export default app;
