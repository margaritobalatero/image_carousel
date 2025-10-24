import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("Missing MONGODB_URI");

let isConnected = false;

export async function connectDb() {
  if (isConnected) return mongoose.connection;
  await mongoose.connect(MONGODB_URI);
  isConnected = true;
  return mongoose.connection;
}
