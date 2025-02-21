import mongoose from "mongoose";

export const ConnectDB = async() => {
    console.log('first');
    console.log(process.env.MONGO_PASSWORD)
    await mongoose.connect(`mongodb+srv://mamilkcs:${process.env.MONGO_PASSWORD}@cluster0.wwpxp.mongodb.net/mamilk?retryWrites=true&w=majority&appName=Cluster0l`
    // await mongoose.connect(`mongodb+srv://mamilkcs:${process.env.MONGO_PASSWORD}@cluster0.hsphc.mongodb.net/mamilk?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log('MongoDB Connected...');
};