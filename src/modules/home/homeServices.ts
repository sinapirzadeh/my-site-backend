import profile from "../../models/profile";

export const getProfile = async () => {
  const data = await profile.findOne({});
  return data;
};
