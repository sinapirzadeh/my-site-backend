import baseController from "../../baseController";
import { Response, Request, NextFunction } from "express";

class skillController extends baseController {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (err: any) {
      next(err);
    }
  }
}

export default new skillController();
