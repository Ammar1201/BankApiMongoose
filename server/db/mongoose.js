import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', false);

const DB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.jbdlndj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DB_URL, (error, mongoDbInstance) => {
  if (err) {
    throw Error('MongoDB connection error: ' + error);
  }
  const { host, port, name } = mongoDbInstance;
  console.log({ host, port, name });
});