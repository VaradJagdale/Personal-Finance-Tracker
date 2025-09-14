import { Link } from 'react-router-dom';
import './TransactionList.css'

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="transaction-container">
      <h2 className="transaction-title">Your Transactions</h2>

      {transactions.length === 0 ? (
        <p className="no-transactions">No transactions yet.</p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((tx) => (
            <li key={tx._id} className="transaction-item">
              <div className="transaction-details">
                <h3>{tx.title}</h3>
                <p>
                  <strong>Amount:</strong> ${tx.amount.toFixed(2)}
                </p>
                <p>
                  <strong>Category:</strong> {tx.category || "Uncategorized"}
                </p>
                <p>
                  <strong>Date:</strong> {new Date(tx.date).toLocaleDateString()}
                </p>
              </div>

              <div className="transaction-actions">
                <Link to={`/${tx._id}/edit`} className="edit-btn">
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(tx._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;

