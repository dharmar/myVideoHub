import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("database is connected");
  } catch (error) {
    console.error(`error in connecting the database${error}`);
  }
};

export default connectDb;
