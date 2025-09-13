import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${API_BASE}/api/transactions`;

// Get all transactions
export const getTransactions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a single transaction by ID
export const getTransactionById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create a new transaction
export const createTransaction = async (transactionData) => {
  const response = await axios.post(API_URL, transactionData);
  return response.data;
};

// Update a transaction by ID
export const updateTransaction = async (id, transactionData) => {
  const response = await axios.put(`${API_URL}/${id}`, transactionData);
  return response.data;
};

// Delete a transaction by ID
export const deleteTransaction = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};