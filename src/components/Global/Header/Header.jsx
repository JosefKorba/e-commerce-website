import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Cart from "../../Cart/Cart";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className={styles.headerBackground}>
      <nav className={styles.headerContainer}>
        <Logo />
        <div className={styles.navBarContainer}>
          <NavBar />
        </div>
        <Cart />
      </nav>
    </header>
  );
};

export default Header;
