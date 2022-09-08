import './App.sass';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
