import profile from "../../../models/profile";
import { IProfileType } from "./profileTypes";

export const getProflie = async () => {
  const data = await profile.findOne({});
  return data;
};

export const createOrUpdateOne = async (
  data: IProfileType,
  imageLocation?: string
) => {
  try {
    if (imageLocation) {
      data.image_url = imageLocation;
    }
    
    const existingProfile = await profile.findOne({});
    if (existingProfile) {
      await profile.updateOne({}, data);
    } else {
      await profile.create(data);
    }

    return true;
  } catch {
    return false;
  }
};
