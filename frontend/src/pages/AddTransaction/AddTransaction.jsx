import { useNavigate } from 'react-router-dom';
import { createTransaction } from '../../services/transactionService';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { toast } from 'react-hot-toast';
import './AddTransaction.css';

const AddTransaction = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    await createTransaction(formData);
    toast.success('Transaction added successfully');
    navigate('/');
  };

  return (
    <div className="add-transaction-container">
      <h1>Add New Transaction</h1>
      <TransactionForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddTransaction;

