import article from "../../models/article";
import { IArticleType } from "./blogTypes";

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
