import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutLittleLemon from './components/AboutLittleLemon';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutLittleLemon />} />
      </Routes>
    </div>
  );
};

export default App;
