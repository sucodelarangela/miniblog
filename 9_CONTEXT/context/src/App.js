import './App.sass';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Context</h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
