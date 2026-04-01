import mongoose from "mongoose";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const ConnectDB = async() => {
    if (cached.conn) {
        console.log('Using cached MongoDB connection');
        return cached.conn;
    }

    if (!cached.promise) {
        console.log('first');
        // console.log(process.env.MONGO_PASSWORD); // Disabled to prevent logging secrets
        
        const uri = `mongodb+srv://mamilkcs:${process.env.MONGO_PASSWORD}@cluster0.wwpxp.mongodb.net/mamilk?retryWrites=true&w=majority&appName=Cluster0l`;
        // const uri = `mongodb+srv://mamilkcs:${process.env.MONGO_PASSWORD}@cluster0.hsphc.mongodb.net/mamilk?retryWrites=true&w=majority&appName=Cluster0`
        
        cached.promise = mongoose.connect(uri).then((mongoose) => {
            console.log('MongoDB Connected...');
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error('MongoDB Connection Error:', e);
        throw e;
    }

    return cached.conn;
};