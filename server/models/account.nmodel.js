import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true
  },
  accountNumber: {
    type: Number,
    required: true
  },
  cash: {
    type: Number,
    default: 0
  },
  credit: {
    type: Number,
    default: 0
  }
});

export const Account = mongoose.model('accounts', accountSchema);