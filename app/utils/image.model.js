import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  caption: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Image || mongoose.model("Image", imageSchema);
