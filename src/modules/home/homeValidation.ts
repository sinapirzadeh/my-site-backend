import { check } from "express-validator";

const homeValidation = () => {
  return [
    check("subject").notEmpty().withMessage("موضوع را وارد کنید"),
    check("message").notEmpty().withMessage("پیام را وارد کنید"),
  ];
};

export default homeValidation;
