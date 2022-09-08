import styles from './Navbar.module.sass';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to='/' className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;