import mongoose from "mongoose";

const skill = mongoose.model(
  "Skill",
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      process: { type: Number, min: 0, max: 100, defult: 0 },
      is_delete: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  )
);

export default skill;
