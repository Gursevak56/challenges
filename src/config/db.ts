// src/config/db.ts
import mongoose from 'mongoose';
export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log('DB connected');
  } catch (err) {
    console.error('DB connection error:', err);
  }
};
