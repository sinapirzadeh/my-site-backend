import { Router } from "express";
import dashbordController from "./dashbordController";

const app = Router();

app.get("/", dashbordController.getDataToDashbord);

export default app;
