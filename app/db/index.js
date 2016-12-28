import mongoose from 'mongoose';
import bluebird from 'bluebird';
import dotenv from 'dotenv';
import find from './find';
import add from './add';

mongoose.Promise = bluebird;
dotenv.config({ silent: true });

mongoose.connect(process.env.MONGODB_URL);

export default {
  find,
  add,
};
