import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar';
import Cart from '../Cart/Cart';

const Header = () => {
 return (
    <header className={styles.header}>
      <Logo />
      <NavBar />
      <Cart />
    </header>
 );
};

export default Header;