export interface IArticleType {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: string | null | undefined;
  image_alt: string;
  ips: [];
  like_count: number;
  is_delete: boolean;
}

export interface ICommentType {
  _id: string;
  message: string;
  is_trusted: boolean;
  article: Object;
  is_delete: boolean;
  updatedAt: string;
}
