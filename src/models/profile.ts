import mongoose from "mongoose";

const profile = mongoose.model(
  "Proflie",
  new mongoose.Schema({
    name: { type: String, required: true },
    short_des: { type: String, required: true },
    descirption: { type: String, required: true },
    image_url: { type: String, required: true },
    image_alt: { type: String, required: true },
    telegram_url: { type: String, required: true },
    linkedin_url: { type: String, required: true },
    github_url: { type: String, required: true },
    rezome_url: { type: String, required: true },
  })
);

export default profile;
