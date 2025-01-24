import article from "../../../models/article";
import comment from "../../../models/comment";
import { IArticleType, ICommentType } from "../../Articles/blogTypes";

export const getArticles = async () => {
  const data = await article
    .find({}, { description: 0 })
    .sort({ updatedAt: -1 })
    .lean();
  return data;
};

export const addArticle = async (data: IArticleType, img_loc: string) => {
  try {
    await article.create({ ...data, image: img_loc });
  } catch (error) {}
};

export const getOne = async (_id: string) => {
  const data = await article.findOne({ _id: _id });
  return data;
};

export const editArticle = async (data: IArticleType, img_loc: string) => {
  const is_delete = await article.updateOne(
    { _id: data._id },
    { ...data, image: img_loc },
    { new: true }
  );
  return is_delete ? true : false;
};

export const delArticle = async (_id: string) => {
  const mode = await article.findOne({ _id: _id });
  await article.updateOne({ _id: _id }, { is_delete: !mode?.is_delete });
};

export const getComments = async (_id: string) => {
  const data = await comment
    .find({ article: _id, is_delete: false })
    .sort({ updatedAt: -1 })
    .lean();
  return data;
};

export const commentEnable = async (_id: string) => {
  const mode = await comment.findOne<ICommentType>({ _id: _id });
  await comment.updateOne({ _id: _id }, { is_trusted: !mode?.is_trusted });
  return true;
};

export const delComment = async (_id: string) => {
  await comment.updateOne({ _id: _id }, { is_delete: true });
  return true;
};
