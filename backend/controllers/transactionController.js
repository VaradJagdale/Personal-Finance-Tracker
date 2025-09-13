import Transaction from '../models/Transaction.js';

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Public
export const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single transaction by ID
// @route   GET /api/transactions/:id
// @access  Public
export const getTransactionById = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      const err = new Error('Transaction not found');
      err.statusCode = 404;
      return next(err);
    }
    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new transaction
// @route   POST /api/transactions
// @access  Public
export const createTransaction = async (req, res, next) => {
  try {
    const { title, amount, date, category } = req.body;

    const transaction = await Transaction.create({
      title,
      amount,
      date,
      category
    });

    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a transaction
// @route   PUT /api/transactions/:id
// @access  Public
export const updateTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!transaction) {
      const err = new Error('Transaction not found');
      err.statusCode = 404;
      return next(err);
    }

    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a transaction
// @route   DELETE /api/transactions/:id
// @access  Public
export const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);

    if (!transaction) {
      const err = new Error('Transaction not found');
      err.statusCode = 404;
      return next(err);
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
