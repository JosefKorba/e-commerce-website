import Features from '../Features/Features';
import Content from '../Content/Content';
import styles from './FeaturesContentWrapper.module.css';
import PropTypes from 'prop-types';


const FeaturesContentWrapper = ({ features, items }) => {
  return (
    <div className={styles.featuresContentContainer}>
      <Features features={features} />
      <Content items={items} />
    </div>
  );
};

FeaturesContentWrapper.propTypes = {
  features: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })),
  items: PropTypes.arrayOf(PropTypes.shape({}))
}
export default FeaturesContentWrapper;