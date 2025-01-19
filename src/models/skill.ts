import mongoose from "mongoose";

const skill = mongoose.model(
  "Skill",
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      process: { type: Number, required: true },
      is_delete: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  )
);

export default skill;
