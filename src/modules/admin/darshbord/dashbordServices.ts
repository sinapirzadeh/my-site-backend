import comment from "../../../models/comment";
import ip from "../../../models/ips";

export const getNewComments = async () => {
  const data = (await comment.find({ is_trusted: false }).lean()).length;
  return data;
};

export const getNumberOfIpsToDay = async () => {
  const data = (await ip.find({ updatedAt: Date.now() }).lean()).length;
  return data;
};
