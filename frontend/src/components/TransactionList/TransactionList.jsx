import { Link } from 'react-router-dom';
import './TransactionList.css'

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul className="transaction-list">
        {transactions.map(tx => (
          <li key={tx._id} className="transaction-item">
            <div className="transaction-details">
              <h2>{tx.title}</h2>
              <p>Amount: {tx.amount}</p>
              <p>Category: {tx.category}</p>
              <p>Date: {new Date(tx.date).toLocaleDateString()}</p>
            </div>
            <div className="transaction-actions">
              <Link to={`/${tx._id}/edit`}>Edit</Link>
              <button onClick={() => onDelete(tx._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

