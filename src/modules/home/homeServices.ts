import message from "../../models/message";
import profile from "../../models/profile";
import project from "../../models/project";
import skill from "../../models/skill";
import { IMessageType } from "./homeTypes";

export const getProfile = async () => {
  const data = await profile.findOne({});
  return data;
};

export const getSkills = async () => {
  const data = await skill.find({ is_delete: false });
  return data;
};

export const getProjects = async () => {
  const data = await project.find({ is_delete: false });
  return data;
};

export const postMessage = async (postData: IMessageType) => {
  try {
    await message.create(postData);
    return true;
  } catch (error) {
    return false;
  }
};
