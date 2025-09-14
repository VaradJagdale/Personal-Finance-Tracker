import { useEffect, useState } from 'react';
import { getTransactions, deleteTransaction } from '../../services/transactionService';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './Home.css';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await getTransactions();
    setTransactions(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    toast.success('Transaction deleted successfully');
    fetchTransactions();
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Personal Finance Tracker</h1>

      <div className="button-wrapper">
        <Link to="/add" className="add-button">Add New Transaction</Link>
      </div>

      {transactions.length === 0 ? (
        <p className="no-transactions">No transactions yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map(tx => (
            <li key={tx._id} className="transaction-item">
              <div className="transaction-details">
                <h2>{tx.title}</h2>
                <p><strong>Amount:</strong> ${tx.amount.toFixed(2)}</p>
                <p><strong>Category:</strong> {tx.category || "Uncategorized"}</p>
                <p><strong>Date:</strong> {new Date(tx.date).toLocaleDateString()}</p>
              </div>
              <div className="transaction-actions">
                <Link to={`/${tx._id}/edit`} className="edit-btn">Edit</Link>
                <button onClick={() => handleDelete(tx._id)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;

