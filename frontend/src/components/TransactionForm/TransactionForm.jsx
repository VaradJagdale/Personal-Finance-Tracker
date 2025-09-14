import { useState } from 'react';
import './TransactionForm.css'

const TransactionForm = ({ initialData = { title: '', amount: '', date: '', category: 'Income' }, onSubmit }) => {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="form-container">
      <form className="transaction-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add Transaction</h2>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />

        <input
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />

        <input
          name="date"
          type="date"
          value={form.date.slice(0, 10)}
          onChange={handleChange}
          required
        />

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit" className="submit-btn">Add Transaction</button>
      </form>
    </div>
  );

};

export default TransactionForm;
