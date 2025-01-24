import { Request, Response, NextFunction } from "express";
import baseController from "../baseController";
import jsonResponse from "../../utils/jsonResponse";
import { addLike, getArticles, getBySlug, addComment, getAllComment } from "./blogServices";

class blogController extends baseController {
  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const articles = await getArticles();
      return jsonResponse({ res, data: articles });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async slug(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await getBySlug(req.params.slug);
      return jsonResponse({ res, data: article });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async like(req: Request, res: Response, next: NextFunction) {
    try {
      await addLike(req.params._id);
      return jsonResponse({ res, msg: "like added!" });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async addCommentOnArticle(req: Request, res: Response, next: NextFunction) {
    try {
      await addComment(req.body, req.params._id);
      return jsonResponse({ res, msg: "comment posted!", code: 202 });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async getComments(req: Request, res: Response, next: NextFunction) {
    try {
      const comments = await getAllComment(req.params._id);
      return jsonResponse({ res, data: comments });
    } catch (err: Error | any) {
      next(err);
    }
  }
}

export default new blogController();
