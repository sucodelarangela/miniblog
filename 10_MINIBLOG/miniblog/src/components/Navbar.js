import styles from './Navbar.module.sass';

import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // using user info
    const { user } = useAuthValue();

    return (
        <nav className={styles.navbar}>
            <NavLink to='/' className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
                </li>
                {/* if user is not logged, shows Enter and Register pages */}
                {!user && (
                    <>
                        <li>
                            <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : '')}>Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
                        </li>
                    </>
                )}
                {/* if user is logged, shows New Blog and Dashboard pages */}
                {user && (
                    <>
                        <li>
                            <NavLink to='/posts/create' className={({ isActive }) => (isActive ? styles.active : '')}>Novo post</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard' className={({ isActive }) => (isActive ? styles.active : '')}>Dashboard</NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : '')}>Sobre</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;