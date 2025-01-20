import { Response, Request, NextFunction } from "express";
import baseController from "../../baseController";
import jsonResponse from "../../../utils/jsonResponse";
import { getProjects, postAddProject, delProject } from "./projectServices";

class projectController extends baseController {
  async getProjects(req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await getProjects();
      return jsonResponse({ res, data: projects });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async addProject(req: Request, res: Response, next: NextFunction) {
    try {
      const img_loc = req.file?.location;
      await postAddProject(req.body, img_loc);
      return jsonResponse({ res, msg: "added!", code: 201 });
    } catch (err: Error | any) {
      next(err);
    }
  }

  async delProject(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.params;
      const id_del = await delProject(_id);
      if (id_del) {
        return jsonResponse({ res, msg: "deleted!", code: 204 });
      }
      return jsonResponse({ res, msg: "Error on Deleted!", code: 500 });
    } catch (err: Error | any) {
      next(err);
    }
  }
}

export default new projectController();
