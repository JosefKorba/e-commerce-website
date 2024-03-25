import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom"; // Importujeme Link

const NavBar = () => {
  return (
    <div className={styles.navBarBackground}>
      <nav className={styles.navBarContainer}>
        <Logo />
        <ul className={styles.siteNavigation}>
          <li>
            <Link to="/" className={styles.link}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/headphones" className={styles.link}>
              HEADPHONES
            </Link>
          </li>
          <li>
            <Link to="/speakers" className={styles.link}>
              SPEAKERS
            </Link>
          </li>
          <li>
            <Link to="/earphones" className={styles.link}>
              EARPHONES
            </Link>
          </li>
        </ul>
        <Cart />
      </nav>
    </div>
  );
};

export default NavBar;
