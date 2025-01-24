export interface IProjectType {
  name: string;
  url: string;
  frameworks: { name: string }[]; // به جای آرایه درون شیء
  image_url: string;
  image_alt: string;
  updatedAt: Date;
  createdAt: Date;
}
