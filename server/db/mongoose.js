import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const DB_URL = '';

mongoose.connect(DB_URL, (error, mongoDbInstance) => {
  if (err) {
    throw Error('MongoDB connection error: ' + error);
  }
  const { host, port, name } = mongoDbInstance;
  console.log({ host, port, name });
});