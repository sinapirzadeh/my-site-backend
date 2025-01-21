import jsonResponse from "../../utils/jsonResponse";
import baseController from "../baseController";
import {
  getProfile,
  getProjects,
  getSkills,
  postMessage,
} from "./homeServices";
import { Request, Response, NextFunction } from "express";
import { sendEmail } from "../../utils/emailService";

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
    } catch (err: Error | any) {
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
      const skills = await getSkills();
      return jsonResponse({ res, data: skills });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async postContact(req: Request, res: Response, next: NextFunction) {
    try {
      const is_send = await postMessage(req.body);
      if (is_send) {
        // console.log("ok");
        // await sendEmail();
        // console.log("ok send email");
        return jsonResponse({ res, msg: "پیام شما ارسال شد" });
      } else {
        return jsonResponse({ res, msg: ".خطایی رخ داد" });
      }
    } catch (err: Error | any) {
      next(err);
    }
  }
}

export default new userController();
