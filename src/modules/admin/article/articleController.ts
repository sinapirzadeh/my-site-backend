import { Response, Request, NextFunction } from "express";
import baseController from "../../baseController";
import jsonResponse from "../../../utils/jsonResponse";
import {
  addArticle,
  commentEnable,
  delArticle,
  delComment,
  getArticles,
  getComments,
  getOne,
} from "./articleServices";

class articleController extends baseController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const articles = await getArticles();
      return jsonResponse({ res, data: articles });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      const article = await getOne(_id);
      return jsonResponse({ res, data: article });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async add(req: Request, res: Response, next: NextFunction) {
    try {
      await addArticle(req.body, req.file?.location);
      return jsonResponse({ res, msg: "added!", code: 201 });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const id_del = await getOne(req.params._id);
      return jsonResponse({ res, msg: "deleted!", code: 202 });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async del(req: Request, res: Response, next: NextFunction) {
    try {
      await delArticle(req.params._id);
      return jsonResponse({ res, msg: "deleted!", code: 204 });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async getComments(req: Request, res: Response, next: NextFunction) {
    try {
      const comments = await getComments(req.params._id);
      return jsonResponse({ res, data: comments });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async commentEdit(req: Request, res: Response, next: NextFunction) {
    try {
      await commentEnable(req.params._id);
      return jsonResponse({ res, msg: "deleted!", code: 202 });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async delComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      await delComment(_id);
      return jsonResponse({ res, msg: "deleted!", code: 204 });
    } catch (err: Error | any) {
      next(err);
    }
  }
}

export default new articleController();
