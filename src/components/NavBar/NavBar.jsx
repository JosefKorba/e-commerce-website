import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";

const NavBar = () => {
  return <nav className={styles.navBarCotainer}>
    <Logo />
        <ul className={styles.siteNavigation}>
          <li><a className={styles.link} href="#">HOME</a></li>
          <li><a className={styles.link} href="#">HEADPHONES</a></li>
          <li><a className={styles.link} href="#">SPEAKERS</a></li>
          <li><a className={styles.link} href="#">EARPHONES</a></li>
        </ul> 
    <Cart />     
  </nav>;
};

export default NavBar;
