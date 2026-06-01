import mongoose from 'mongoose';

export function connectDatabase(uri = 'mongodb://127.0.0.1:27017/octofit_db') {
  mongoose.set('strictQuery', false);
  return mongoose.connect(uri);
}
