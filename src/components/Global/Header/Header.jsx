import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Cart from "../../Cart/Cart";
import NavBar from "../NavBar/NavBar";

const Header = () => {
 return (
    <div className={styles.headerBackground}>
      <nav className={styles.headerContainer}>
        <Logo />
        <div className={styles.navBarContainer}>
          <NavBar />
        </div>
        <Cart />
      </nav>
    </div>
 );
};

export default Header;