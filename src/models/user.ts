import { model, Schema } from "mongoose";

const user = model(
  "User",
  new Schema(
    {
      username: String,
      password: String,
    },
    {
      timestamps: true,
    }
  )
);

export default user;
