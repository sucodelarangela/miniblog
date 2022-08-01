import './Navbar.sass';

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>Sobre</NavLink>
            <NavLink to='/products'>Produtos</NavLink>
        </nav>
    );
};

export default Navbar;