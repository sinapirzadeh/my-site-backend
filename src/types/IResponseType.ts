import { Response } from "express";

export interface IResponseType {
  res: Response;
  msg?: string;
  code?: number;
  data?: object;
}
