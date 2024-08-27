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

    cached.promise = mongoose.connect(C.MONGODB_URI, options).then((m) => {
+     console.log('Connected to DB.');
      return m;
    }).catch((e) => {
+     console.error('Error connecting to DB:', e);
    });
  }
}

export default connectDb;
  