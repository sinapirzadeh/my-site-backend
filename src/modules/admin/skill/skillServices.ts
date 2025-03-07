import skill from "../../../models/skill";
import { ISkillType } from "./skillTypes";

export const getSkills = async () => {
  const skills = await skill.find({ is_delete: false });
  return skills;
};

export const postSkill = async (bodyData: ISkillType) => {
  const isCreated = await skill.create(bodyData);
  return isCreated ? true : false;
};

export const delSkill = async (id: string) => {
  const isDeleted = await skill.findOneAndUpdate(
    { _id:id },
    { is_delete: true },
    { new: true }
  );
  return isDeleted ? true : false;
};
