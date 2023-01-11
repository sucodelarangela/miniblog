import { Link, Outlet } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to='/'>Movies Lib</Link>
        </h2>
        <Link to='movie/1'>Movie</Link>
        <Link to='search'>Search</Link>
      </nav>
      <h2>Movies Lib</h2>
      <Outlet />
    </div>
  );
}

export default App;
