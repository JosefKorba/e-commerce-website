import styles from "./NavBar.module.css";

const NavBar = () => {
  return <nav>
        <ul className={styles.siteNavigation}>
          <li className={styles.link}><a href="#">HOME</a></li>
          <li className={styles.link}><a href="#">HEADPHONES</a></li>
          <li className={styles.link}><a href="#">SPEAKERS</a></li>
          <li className={styles.link}><a href="#">EARPHONES</a></li>
        </ul>      
  </nav>;
};

export default NavBar;
