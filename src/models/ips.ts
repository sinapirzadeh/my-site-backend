import { model, Schema } from "mongoose";

const ip = model(
  "Ip",
  new Schema({
    ip: String,
  })
);

export default ip;
