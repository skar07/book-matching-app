import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

export const connectDB = (url: string) => {
      return mongoose.connect(url);
}
