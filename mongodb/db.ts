import mongoose from "mongoose";

const connectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@testcluster.w8gwryv.mongodb.net/`;

if (!connectionString) {
  throw new Error("Please provide a valid connection string");
}

const connectDB = async () => {
  if (mongoose.connection?.readyState >= 1) {
    //console.log("==connected to mongoDB==")
    return;
  }
  try {
    console.log("------ Connecting to MongoDB ------");
    await mongoose.connect(connectionString);
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
};
