import config from "config";
import mongoose from "mongoose";

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Database connected...");
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connection, 5000);
  }
}

export { connection };
