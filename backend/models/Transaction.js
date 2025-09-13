import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title for the transaction'],
    trim: true
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  date: {
    type: Date,
    required: [true, 'Please add a date for the transaction'],
    default: Date.now
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Income', 'Expense', 'Other'],
    default: 'Other'
  }
}, {
  timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
