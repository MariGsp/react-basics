import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Component
// import Heading from './components/Heading';
import Card from './components/Card';
import Button from './components/Button';
import ModeToggler from './components/ModeToggler';

const App = () => {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <Button />
      <ModeToggler />
    </div>
  );
};

export default App;
