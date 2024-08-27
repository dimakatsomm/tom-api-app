import mongoose from "mongoose";

import * as C from '@/constants';

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null
  }
}

async function connectDb() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(C.MONGODB_URI).then((mongoose) => {
      console.log('Connected to DB.');
      return mongoose;
  });
  }
}

export default connectDb;
  