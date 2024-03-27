import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.css'; 

const Button = ({ path, children, color }) => {
  return (
    <Link to={path}>
      <button className={`${styles.button} ${styles[color]}`}>{children}</button>
    </Link>
  );
};

Button.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default Button;