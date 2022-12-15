import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accounts: {
    type: Array,
    ref: 'accounts'
  }
});

export const User = mongoose.model('users', userSchema);