import Transaction from '../models/Transaction.js';

export const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    next(error);
  }
};

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
