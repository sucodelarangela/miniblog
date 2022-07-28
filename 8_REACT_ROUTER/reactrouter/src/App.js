// styles
import './App.sass';

// dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';

function App() {
  return (
    <section className="App">
      <h1>React Router</h1>
      <Router>
        {/* The Navbar contains react-router-dom elements, so it's mandatory it's used inside the Router tag */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Dynamic routes: dynamic values are preceded by : */}
          <Route path='/products/:id' element={<Product />} />
          {/* Nested route */}
          <Route path='/products/:id/info' element={<Info />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
