import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navBarBackground}>
      <nav className={styles.navBarContainer}>
        <Logo />
        <ul className={styles.siteNavigation}>
          <li>
            <Link to="/" className={styles.link} tabIndex="0" aria-label="Home Page">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/headphones" className={styles.link} tabIndex="0" aria-label="Headphones Page">
              HEADPHONES
            </Link>
          </li>
          <li>
            <Link to="/speakers" className={styles.link} tabIndex="0" aria-label="Speakers Page">
              SPEAKERS
            </Link>
          </li>
          <li>
            <Link to="/earphones" className={styles.link} tabIndex="0" aria-label="Earphones Page">
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
