import { check } from "express-validator";

const projectValidation = () => {
  return [
    check("title").notEmpty().withMessage("title is Required!"),
    check("process")
      .notEmpty()
      .withMessage("title is Required!")
      .isInt({ min: 0, max: 100 }),
  ];
};

export default projectValidation;
