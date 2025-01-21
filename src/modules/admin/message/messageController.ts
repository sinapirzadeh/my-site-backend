import baseController from "../../baseController";
import { Response, Request, NextFunction } from "express";
import jsonResponse from "../../../utils/jsonResponse";
import { delMessage, getMessages, readMessage } from "./messageServices";

class messageController extends baseController {
  async getMsgs(req: Request, res: Response, next: NextFunction) {
    try {
      const messages = await getMessages();
      return jsonResponse({ res, data: messages });
    } catch (err: any) {
      next(err);
    }
  }

  async isRead(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      const is_Read = await readMessage(_id);
      if (is_Read) {
        return jsonResponse({
          res,
          data: "is Readed!",
          code: 204,
        });
      }
      return jsonResponse({
        res,
        data: "Error on 'is Readed'",
        code: 500,
      });
    } catch (err: any) {
      next(err);
    }
  }

  async delMsg(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      const isDeleted = await delMessage(_id);
      if (isDeleted) {
        return jsonResponse({
          res,
          data: "is Deleted",
          code: 204,
        });
      }
      return jsonResponse({
        res,
        data: "Error on 'isDeleted'",
        code: 500,
      });
    } catch (err: any) {
      next(err);
    }
  }
}

export default new messageController();
