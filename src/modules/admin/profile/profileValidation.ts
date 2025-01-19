import { check } from "express-validator";

const profileValidation = () => {
  return [
    check("name").isEmpty().withMessage("name is required"),
    check("short_des").isEmpty().withMessage("short_des is required"),
    check("descirption").isEmpty().withMessage("descirption is required"),
    check("image_url").isEmpty().withMessage("image_url is required"),
    check("image_alt").isEmpty().withMessage("image_alt is required"),
    check("telegram_url").isEmpty().withMessage("telegram_url is required"),
    check("linkedin_url").isEmpty().withMessage("linkedin_url is required"),
    check("github_url").isEmpty().withMessage("github_url is required"),
    check("rezome_url").isEmpty().withMessage("rezome_url is required"),
  ];
};

export default profileValidation;
