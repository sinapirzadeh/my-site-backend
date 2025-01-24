export interface IArticleType {
  _id: string;
  name: string;
  url: string;
  frameworks: [{ name: string }];
  image_url: string;
  image_alt: string;
}
