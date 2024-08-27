import mongoose from "mongoose";

import * as C from '../constants';

let cached = (global as any).mongoose;

mongoose.connect(C.MONGODB_URI).then(() => {
    console.log('Connected to DB.');
});
  