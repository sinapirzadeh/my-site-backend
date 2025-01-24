import article from "../../models/article";
import message from "../../models/message";
import profile from "../../models/profile";
import project from "../../models/project";
import skill from "../../models/skill";
import { IProfileType } from "../admin/profile/profileTypes";
import { IProjectType } from "../admin/projects/projectTypes";
import { ISkillType } from "../admin/skill/skillTypes";
import { IArticleType } from "../Articles/blogTypes";
import { IMessageType } from "./homeTypes";
import logger from "../../utils/logger";

export const getProfile = async (): Promise<IProfileType> => {
  try {
    const data = await profile.findOne({}).lean();
    return data as IProfileType;
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error on fetching profile."
    );
  }
};

export const getSkills = async (): Promise<ISkillType[]> => {
  try {
    const data = await skill.find({ is_delete: false }).lean();
    return data as ISkillType[];
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error on fetching skills."
    );
  }
};

export const getProjects = async (): Promise<IProjectType[]> => {
  try {
    const data: IProjectType[] = await project
      .find({ is_delete: false })
      .lean();
    return data;
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error on fetching Projects."
    );
  }
};

export const getHomeArticles = async (): Promise<IArticleType[]> => {
  try {
    const data: IArticleType[] = await article
      .find({ is_delete: false })
      .sort({ updatedAt: -1 })
      .limit(3)
      .lean();
    return data;
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error on fetching Articles."
    );
  }
};

export const postMessage = async (postData: IMessageType): Promise<void> => {
  try {
    await message.create(postData);
  } catch (error: unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error on Save Message."
    );
  }
};
