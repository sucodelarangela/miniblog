import { Outlet } from 'react-router-dom';

import './App.css';

import { Navbar } from './components/Navbar';

function App() {

  return (
    <section className="App">
      <Navbar />
      <h2>Movies Lib</h2>
      <Outlet />
    </section>
  );
}

export default App;
