import mongoose from "mongoose";

const MONGODB_URI = `mongodb+srv://mamilkcs:${process.env.MONGO_PASSWORD}@cluster0.wwpxp.mongodb.net/mamilk?retryWrites=true&w=majority&appName=Cluster0`;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGO_PASSWORD environment variable");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const ConnectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔌 Creating new MongoDB connection...");

    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,

      // 👇 VERY IMPORTANT for Vercel
      serverSelectionTimeoutMS: 5000, // fail fast if can't connect
      connectTimeoutMS: 10000,

      // optional but helpful
      maxPoolSize: 10,
    })
    .then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed:", err);
      throw err;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // allow retry on next request
    throw e;
  }

  return cached.conn;
};