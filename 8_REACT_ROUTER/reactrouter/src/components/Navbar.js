// styles
import './Navbar.sass';

// dependencies
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>Sobre</Link>
        </nav>
    );
};

export default Navbar;