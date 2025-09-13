import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/dbConnection.js';
import transactionRoutes from './routes/transactionRoutes.js';
import errorHandler from './utils/errorHandler.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// Routes
app.use('/api/transactions', transactionRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Personal Finance Tracker API is running');
});

// Connect to MongoDB
connectDB();

app.use(errorHandler);

export default app;

