import mongoose from "mongoose";

const reset = "\x1b[0m";
const blue = "\x1b[34m";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`${blue}MongoDB Connected: ${conn.connection.host}${reset}`);
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    process.exit(1);
  }
};
