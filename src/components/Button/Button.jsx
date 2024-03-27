import { Link } from 'react-router-dom';
import styles from './Button.module.css'; 

const Button = ({ path, children, color }) => {
 return (
    <Link to={path}>
      <button className={`${styles.button} ${styles[color]}`}>{children}</button>
    </Link>
 );
};

export default Button;