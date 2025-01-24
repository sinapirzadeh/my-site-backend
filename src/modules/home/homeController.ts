import jsonResponse from "../../utils/jsonResponse";
import baseController from "../baseController";
import {
  getHomeArticles,
  getProfile,
  getProjects,
  getSkills,
  postMessage,
} from "./homeServices";
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

  async getSkills(req: Request, res: Response, next: NextFunction) {
    try {
      const skills = await getSkills();
      return jsonResponse({ res, data: skills });
    } catch (err: Error | unknown) {
      next(err);
    }
  }

  async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await getProjects();
      return jsonResponse({ res, data: projects });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async getArticles(req: Request, res: Response, next: NextFunction) {
    try {
      const articleHome = await getHomeArticles();
      return jsonResponse({ res, data: articleHome });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async postContact(req: Request, res: Response, next: NextFunction) {
    try {
      await postMessage(req.body);
      // console.log("ok")
      // await sendEmail();
      // console.log("ok send email");
      return jsonResponse({ res, msg: "پیام شما ارسال شد" });
    } catch (err: Error | any) {
      next(err);
    }
  }
}

export default new userController();
