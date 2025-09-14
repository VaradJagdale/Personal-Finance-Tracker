import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddTransaction from './pages/AddTransaction/AddTransaction';
import EditTransaction from './pages/EditTransaction/EditTransaction';
import DeleteTransaction from './pages/DeleteTransaction';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/:id/edit" element={<EditTransaction />} />
        <Route path="/:id/delete" element={<DeleteTransaction />} />
      </Routes>
    </Router>
  );
}

export default App;

