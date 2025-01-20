import project from "../../../models/project";
import { IProjectType } from "./projectTypes";

export const getProjects = async () => {
  const data = await project.find({ is_delete: false });
  return data;
};

export const postAddProject = async (data: IProjectType, img_loc: string) => {
  const isAdded = await project.create({ ...data, image_url: img_loc });
  return true;
};

export const delProject = async (id: string) => {
  const is_delete = await project.updateOne(
    { _id: id },
    { is_delete: true },
    { new: true }
  );
  return is_delete ? true : false;
};
