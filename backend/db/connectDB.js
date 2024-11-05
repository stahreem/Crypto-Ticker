import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const client = await mongoose.connect(process.env.MONGO_URI);
    console.log("server is connected to database successfully ");
    return client.connection.db;
  } catch (error) {
    console.log("error in connectDB", error);
  }
};
