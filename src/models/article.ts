import mongoose from "mongoose";

const article = mongoose.model(
  "Article",
  new mongoose.Schema(
    {
      title: { type: String, required: true },
      slug: { type: String, required: true, unique: true },
      image: { type: String },
      image_alt: { type: String, required: true },
      description: { type: String, required: true },
      like_count: { type: Number, default: 0 },
      ips: { type: mongoose.Schema.Types.ObjectId, ref: "Ip" },
      is_delete: { type: Boolean, default: false },
      // comments: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
    },
    {
      timestamps: true,
    }
  )
);

export default article;
