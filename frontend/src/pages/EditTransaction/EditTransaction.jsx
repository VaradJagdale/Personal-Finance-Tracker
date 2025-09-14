import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTransactionById, updateTransaction } from '../../services/transactionService';
import TransactionForm from '../../components/TransactionForm/TransactionForm';
import { toast } from 'react-hot-toast';
import './EditTransaction.css';

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      const res = await getTransactionById(id);
      setInitialData(res.data);
    };
    fetchTransaction();
  }, [id]);

  const handleSubmit = async (formData) => {
    await updateTransaction(id, formData);
    toast.success('Transaction updated successfully');
    navigate('/');
  };

  return (
    <div className="edit-transaction-container">
      <h1 className="form-title">Edit Transaction</h1>
      {initialData ? (
        <TransactionForm initialData={initialData} onSubmit={handleSubmit} />
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </div>
  );

};

export default EditTransaction;

