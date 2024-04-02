import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.module.css'; 

const Button = ({ path, children, color, ariaLabel, isToggle }) => {
 const buttonProps = {
    className: `${styles.button} ${styles[color]}`,
    type: "button",
    'aria-label': ariaLabel,
    'aria-pressed': isToggle ? 'true' : undefined,
    role: isToggle ? 'button' : undefined, 
    tabIndex: "0",
 };

 return (
    <Link to={path}>
      <button {...buttonProps}>
        {children}
      </button>
    </Link>
 );
};

Button.propTypes = {
 path: PropTypes.string.isRequired,
 children: PropTypes.node.isRequired,
 color: PropTypes.string,
 ariaLabel: PropTypes.string,
 isToggle: PropTypes.bool,
};

Button.defaultProps = {
 color: 'default',
 isToggle: false,
};

export default Button;