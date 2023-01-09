// O TypeScript não permite essa importação por padrão, precisa ser configurada através do Global.d.ts
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>React + TS Todo</h1>
    </header>
  );
};

export default Header;
