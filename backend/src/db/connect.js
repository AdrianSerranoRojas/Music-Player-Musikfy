import mongoose from "mongoose";

const URI = process.env.MONGODB_URL;

export default function connect() {
  return mongoose.connect(URI);
}