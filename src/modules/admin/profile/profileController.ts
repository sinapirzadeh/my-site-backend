import jsonResponse from "../../../utils/helperFunc/jsonResponse";
import baseController from "../../baseController";
import { getProflie, createOrUpdateOne } from "./profileServices";
import { Response, Request, NextFunction } from "express";

class userController extends baseController {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const profile = await getProflie();
      return jsonResponse({
        res,
        data: { profile },
      });
    } catch (err: any) {
      next(err);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) return jsonResponse({ res, msg: "No file uploaded!" });
      const image_location = req.file?.path;
      const isCreated = await createOrUpdateOne(req.body, image_location);
      if (isCreated) {
        return jsonResponse({
          res,
          msg: "Seccess!",
        });
      }
      return jsonResponse({
        res,
        msg: "Failed!",
      });
    } catch (err: any) {
      next(err);
    }
  }
}

export default new userController();
