import styles from "./Logo.module.css";
import logoImage from "../../assets/images/shared/desktop/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoImage} alt="Website logo" aria-label="Company logo"/>
    </div>
  );
};

export default Logo;
