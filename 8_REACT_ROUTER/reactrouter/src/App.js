// styles
import './App.sass';

// dependencies
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <section className="App">
      <h1>React Router</h1>
      <Router>
        {/* The Navbar contains react-router-dom elements, so it's mandatory it's used inside the Router tag */}
        <Navbar />
        {/* Search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Dynamic routes: dynamic values are preceded by : */}
          <Route path='/products/:id' element={<Product />} />
          {/* Nested route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* No match route: usually the last route in this list */}
          {/* Search */}
          <Route path='/search' element={<Search />} />
          {/* Redirecting routes using Navigate */}
          <Route path='/company' element={<Navigate to="/about" />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;

/*
About the no-match-route:
In this project, if we access a route that is not defined above, we will have the NotFound page loaded.
For instance: /hauhsuahs returns the 404 page.

But if we access a product page with a non existent id, we still have the Product page loading, because the route exists. So, to have the NotFound page loaded, we will have another approach in the future.
*/