import jsonResponse from "../../../utils/jsonResponse";
import baseController from "../../baseController";
import { getProflie, createOrUpdateOne } from "./profileServices";
import { Response, Request, NextFunction } from "express";

class profileController extends baseController {
  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const profile = await getProflie();
      return jsonResponse({
        res,
        data: profile,
      });
    } catch (err: any) {
      next(err);
    }
  }

  async createProfile(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(133);
      if (!req.file) return jsonResponse({ res, msg: "No file uploaded!" });
      const image_location = req.file?.location;
      const isCreated = await createOrUpdateOne(req.body, image_location);
      if (isCreated) {
        return jsonResponse({
          res,
          msg: "Seccess!",
          code: 201,
        });
      }
      return jsonResponse({
        res,
        msg: "Failed!",
        code: 500,
      });
    } catch (err: any) {
      next(err);
    }
  }
}

export default new profileController();
