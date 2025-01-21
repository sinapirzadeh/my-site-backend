import { model, Schema } from "mongoose";

const message = model(
  "Message",
  new Schema(
    {
      subject: { type: String, required: true },
      message: { type: String, required: true },
      is_read: { type: Boolean, default: false },
      is_delete: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  )
);

export default message;
