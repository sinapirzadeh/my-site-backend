import { Response, Request, NextFunction } from "express";
import baseController from "../../baseController";
import jsonResponse from "../../../utils/jsonResponse";
import { getNewComments, getNumberOfIpsToDay } from "./dashbordServices";

class dashbordController extends baseController {
  async getDataToDashbord(req: Request, res: Response, next: NextFunction) {
    try {
      const newComment_cound = await getNewComments();
      const numberOfViewToDay = await getNumberOfIpsToDay();
      return jsonResponse({
        res,
        data: {
          newComment_cound,
          numberOfViewToDay,
        },
      });
    } catch (err: Error | any) {
      next(err);
    }
  }
}

export default new dashbordController();
