import mongoose from 'mongoose';

export default mongoose.model(
  'User',
  mongoose.Schema({
    email: 'String',
    forename: 'String',
    surname: 'String',
  }),
);
