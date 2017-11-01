import mongoose from 'mongoose';
import bluebird from 'bluebird';
import dotenv from 'dotenv';
import find from './find';
import add from './add';
import remove from './remove';
import update from './update';

mongoose.Promise = bluebird;
dotenv.config({ silent: true });

if (process.env.NODE_ENV === 'test') {
  mongoose.connect(process.env.MONGODB_TESTING_URL);
} else {
  mongoose.connect(process.env.MONGODB_URL);
}

export default {
  find,
  add,
  remove,
  update,
};
