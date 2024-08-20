/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

// Component
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>

    </div>
  );
};

export default App;
