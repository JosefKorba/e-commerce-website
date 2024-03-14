import styles from "./NavBar.module.css";

const NavBar = () => {
  return <nav className={styles.siteNavigation}>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">HEADPHONES</a></li>
          <li><a href="#">SPEAKERS</a></li>
          <li><a href="#">EARPHONES</a></li>
        </ul>      
  </nav>;
};

export default NavBar;
