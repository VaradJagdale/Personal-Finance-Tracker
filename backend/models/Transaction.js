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
    enum: ['Income', 'Expense', 'Other'], // You can modify categories as needed
    default: 'Other'
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
