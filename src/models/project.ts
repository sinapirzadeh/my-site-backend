import mongoose from "mongoose";

const project = mongoose.model(
  "Project",
  new mongoose.Schema(
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
      frameworks: {
        type: [{ name: { type: String, required: true } }],
        required: true,
      },
      image_url: { type: String, required: true },
      image_alt: { type: String, required: true },
      is_delete: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  )
);

export default project;
