// styles
import './Navbar.sass';

// dependencies
import { NavLink } from 'react-router-dom';

/*
Instead of Link, we will use NavLink to add an .active class on the Navbar to help us identify the current page
The NavLink automatically add a class "active" to the current page link, which you can style in your css file
If you wish to use a different class, you can use the parameter "isActive" from NavLink and create a conditional to identify if the page is active or not. In this case, our NavLink would look like this:
<NavLink to='/' className={({ isActive }) => (isActive ? 'esta-ativo' : 'nao-esta-ativo')}>Home</NavLink>
*/

const Navbar = () => {
    return (
        <nav>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>Sobre</Link> */}
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>Sobre</NavLink>
        </nav>
    );
};

export default Navbar;