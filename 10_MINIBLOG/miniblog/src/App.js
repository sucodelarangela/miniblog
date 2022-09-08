import './App.sass';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
