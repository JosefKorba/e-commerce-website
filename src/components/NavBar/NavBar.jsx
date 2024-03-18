import styles from "./NavBar.module.css";

const NavBar = () => {
  return <nav>
        <ul className={styles.siteNavigation}>
          <li><a className={styles.link} href="#">HOME</a></li>
          <li><a className={styles.link} href="#">HEADPHONES</a></li>
          <li><a className={styles.link} href="#">SPEAKERS</a></li>
          <li><a className={styles.link} href="#">EARPHONES</a></li>
        </ul>      
  </nav>;
};

export default NavBar;
