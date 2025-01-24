import article from "../../models/article";
import comment from "../../models/comment";
import { IArticleType, ICommentType } from "./blogTypes";

export const getArticles = async (): Promise<IArticleType[]> => {
  try {
    const articles: IArticleType[] = await article
      .find({ is_delete: false })
      .lean();
    return articles;
  } catch (error: Error | unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error fetching Article by slug!"
    );
  }
};

export const getBySlug = async (slug: string): Promise<IArticleType> => {
  try {
    const data: IArticleType = await article.findOne({ slug: slug }).lean();
    return data;
  } catch (error: Error | unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error fetching Article by slug!"
    );
  }
};

export const addLike = async (_id: string): Promise<void> => {
  try {
    await article
      .findOneAndUpdate({ _id }, { $inc: { like_count: 1 } }, { new: true })
      .lean();
  } catch (error: Error | unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error on Article Like Count!."
    );
  }
};

export const addComment = async (
  data: ICommentType,
  _id: string
): Promise<void> => {
  try {
    await comment.create({ ...data, article: _id });
  } catch (error: Error | unknown) {
    throw new Error(
      error instanceof Error ? error.message : "Error on Article Like Count!."
    );
  }
};

export const getAllComment = async (_id: string) => {
  const data = await comment
    .find({ is_delete: false, article: _id })
    .sort({ updatedAt: -1 })
    .lean();
  return data;
};
