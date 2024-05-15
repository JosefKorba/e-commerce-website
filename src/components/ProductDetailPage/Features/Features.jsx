import PropTypes from 'prop-types';
import styles from './Features.module.css';

const Features = ({ features }) => {
  return (
    <div className={styles.features}>
      <h3 className={styles.featuresTitle}>Features</h3>
      <p className={styles.featuresDescription}>{features}</p>
    </div>
  );
};

Features.propTypes = {
  features: PropTypes.string.isRequired,
};

export default Features;