import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './Navbar.css';

export const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to='/'><BiCameraMovie />Movies Lib</Link>
      </h2>
      <form>
        <input type="text" placeholder='Busque um filme' />
        <button type='submit'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};
