import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("FATAL: JWT_SECRET environment variable is not set.");
}

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hashed: string) {
  return await bcrypt.compare(password, hashed);
}

export function signToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET as string, { expiresIn: "7d" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET as string) as { userId: string };
  } catch (error) {
    return null;
  }
}
