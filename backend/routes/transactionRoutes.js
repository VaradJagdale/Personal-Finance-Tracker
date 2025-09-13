import express from 'express';
import { getTransactions, getTransactionById, createTransaction, updateTransaction, deleteTransaction } from '../controllers/transactionController.js';

const router = express.Router();

// Get all transactions
router.get('/', getTransactions);

// Get a single transaction by ID
router.get('/:id', getTransactionById);

// Create a new transaction
router.post('/', createTransaction);

// Update a transaction by ID
router.put('/:id', updateTransaction);

// Delete a transaction by ID
router.delete('/:id', deleteTransaction);

export default router;
