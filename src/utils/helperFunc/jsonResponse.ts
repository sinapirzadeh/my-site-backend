import { IResponseType } from "../../types/IResponseType";

const jsonResponse = ({
  res,
  msg = "Success",
  code = 200,
  data = {},
}: IResponseType): void => {
  res.status(code).json({ msg, data });
};

export default jsonResponse;
