import baseController from "../../baseController";
import { Response, Request, NextFunction } from "express";
import { delSkill, getSkills, postSkill } from "./skillServices";
import jsonResponse from "../../../utils/jsonResponse";

class skillController extends baseController {
  async getSkills(req: Request, res: Response, next: NextFunction) {
    try {
      const skills = await getSkills();
      return jsonResponse({ res, data: skills });
    } catch (err: any) {
      next(err);
    }
  }

  async createSkill(req: Request, res: Response, next: NextFunction) {
    try {
      const isCreated = await postSkill(req.body);
      if (isCreated) {
        return jsonResponse({
          res,
          data: "محارت با موفقیت اضافه شد",
          code: 201,
        });
      }
      return jsonResponse({
        res,
        data: "مشکلی در ساخت محارت جدید به وجود آمده است",
        code: 500,
      });
    } catch (err: any) {
      next(err);
    }
  }

  async delSkill(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const isDeleted = await delSkill(id);
      if (isDeleted) {
        return jsonResponse({
          res,
          data: "محارت با موفقیت حذف شد",
          code: 204,
        });
      }
      return jsonResponse({
        res,
        data: "مشکلی در حذف محارت ها وجود آمده است",
        code: 500,
      });
    } catch (err: any) {
      next(err);
    }
  }
}

export default new skillController();
