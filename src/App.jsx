import './App.css';

// Component
import Heading from './components/Heading';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Heading />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
};

export default App;
