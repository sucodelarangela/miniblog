// styles
import './App.css';

// dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Router>
        {/* The Navbar contains react-router-dom elements, so it's mandatory it's used inside the Router tag */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
