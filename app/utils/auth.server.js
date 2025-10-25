import bcrypt from "bcryptjs";
import User from "./user.model.js";
import { connectDB } from "./db.server.js";

export async function registerUser({ username, password }) {
  await connectDB();
  const existing = await User.findOne({ username });
  if (existing) throw new Error("Username already exists");
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, passwordHash });
  return newUser;
}

export async function loginUser({ username, password }) {
  await connectDB();
  const user = await User.findOne({ username });
  if (!user) throw new Error("Invalid username or password");
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) throw new Error("Invalid username or password");
  return user;
}
