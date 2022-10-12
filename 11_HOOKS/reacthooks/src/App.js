import 'App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Sobre</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
