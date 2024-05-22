import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Cart from "../../Cart/Cart/Cart";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerBackground}>
      <nav className={styles.headerContainer}>
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.isActive : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-controls="navigation"
        >
          <span className={styles.hamburgerBox}>
            <span className={styles.hamburgerInner}></span>
          </span>
        </button>
        <Logo />
        <div className={styles.navBarContainer}>
          <NavBar />
        </div>
        <Cart />
      </nav>
      <div className={`${styles.mobileNavBarContainer} ${isMenuOpen ? styles.showMobileMenu : ""}`}>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;