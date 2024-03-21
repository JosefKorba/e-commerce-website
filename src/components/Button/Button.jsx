import styles from './Button.module.css';

const Button = ({ children, color}) => {
 return (
    <button className={`${styles.button} ${styles[color]}`}>
      {children}
    </button>
 );
};

export default Button;