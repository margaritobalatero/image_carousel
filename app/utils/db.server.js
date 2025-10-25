import mongoose from "mongoose";

let isConnected = false;

// 🔌 Connect to MongoDB (Atlas or local)
export async function connectDB() {
  if (isConnected) return;

  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/carouselApp";

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

// 🧩 Define item schema for images/videos
const itemSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["image", "video"],
    default: "image",
  },
});

// 🧱 Create or reuse model
export const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
