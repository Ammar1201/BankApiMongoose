import mongoose from 'mongoose';

const transferSchema = new mongoose.Schema({
  senderUserID: {
    type: String,
    required: true
  },
  senderUserAccountNumber: {
    type: Number,
    required: true
  },
  receiverUserID: {
    type: String,
    required: true
  },
  receiverUserAccountNumber: {
    type: Number,
    required: true
  },
  transferredAmount: {
    type: Number,
    required: true
  },
  transferTime: {
    type: Date,
    default: new Date().toUTCString()
  }
});

export const Transfer = mongoose.model('transfers', transferSchema);