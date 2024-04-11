import Logo from "../Logo/Logo"
import NavBar from "../NavBar/NavBar"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footerBackground}>
        <nav className={styles.footerContainer}>
            <Logo />
            <NavBar />
        </nav>
    </div>
  )
}

export default Footer