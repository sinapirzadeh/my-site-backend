import jsonResponse from "../../utils/jsonResponse";
import baseController from "../baseController";
import { getProfile } from "./homeServices";
import { Request, Response, NextFunction } from "express";

class userController extends baseController {
  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const profile = await getProfile();
      return jsonResponse({
        res,
        data: profile,
      });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async getProjects(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
    } catch (err: Error | any) {
      next(err);
    }
  }

  async getArticles(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err: Error | any) {
      next(err);
    }
  }

  async postContact(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err: Error | any) {
      next(err);
    }
  }
}

export default new userController();
