import { Router } from "express";
import blogController from "./blogController";

const app = Router();

app.get("/", blogController.all);
app.get("/:slug", blogController.slug);
app.get("/:slug/comments", blogController.getComments);
app.post("/:slug/comments", blogController.addCommentOnArticle);

export default app;
