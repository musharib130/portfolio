import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your .env");
}

const uri = process.env.MONGODB_URI;

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri)
      .then((mongoose) => mongoose)
      .catch((err) => {
        cached.promise = null; // allow retry
        throw err;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connect;