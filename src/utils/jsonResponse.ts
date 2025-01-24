import { Response } from "express";

interface IResponseType {
  res: Response;
  msg?: string;
  code?: number;
  data?: {} | any;
}

const jsonResponse = ({
  res,
  msg = "Success",
  code = 200,
  data = {},
}: IResponseType): void => {
  res.status(code).json({ msg, data });
};

export default jsonResponse;
