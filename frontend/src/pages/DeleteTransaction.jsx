import { useEffect } from 'react';
import { deleteTransaction } from '../services/transactionService';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const deleteTx = async () => {
      await deleteTransaction(id);
      toast.success('Transaction deleted successfully');
      navigate('/');
    };
    deleteTx();
  }, []);

  return <h1>Deleting transaction...</h1>;
};

export default DeleteTransaction;
