import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Root } from './Root';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </Router>
  );
}
