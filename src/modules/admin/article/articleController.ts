import { Response, Request, NextFunction } from "express";
import baseController from "../../baseController";
import jsonResponse from "../../../utils/jsonResponse";
import { addArticle, delArticle, getArticles, getOne } from "./articleServices";

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
      console.log(3343);
      const img_loc = req.file?.location;
      await addArticle(req.body, img_loc);
      console.log(img_loc);
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
      const { _id } = req.params;
      const id_del = await delArticle(_id);
      if (id_del) {
        return jsonResponse({ res, msg: "deleted!", code: 204 });
      }
      return jsonResponse({ res, msg: "Error on Deleted!", code: 500 });
    } catch (err: Error | any) {
      next(err);
    }
  }
}

export default new articleController();
