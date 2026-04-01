import mongoose from "mongoose";

const MONGODB_URI = `mongodb+srv://mamilkcs:${process.env.MONGO_PASSWORD}@cluster0.wwpxp.mongodb.net/mamilk?retryWrites=true&w=majority&appName=Cluster0`;
if (!process.env.MONGO_PASSWORD) {
  throw new Error("Please define the MONGO_PASSWORD environment variable");
}

// 👇 global cache (VERY IMPORTANT)
let cached = (global as any).mongoose || { conn: null, promise: null };

export const ConnectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
      maxPoolSize: 5, // lower = safer for free tier
    };

    cached.promise = mongoose.connect(MONGODB_URI, options);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

// 👇 save to global
(global as any).mongoose = cached;