import Features from '../Features/Features';
import Content from '../Content/Content';
import styles from './FeaturesContentWrapper.module.css';

const FeaturesContentWrapper = ({ features, items }) => {
  return (
    <div className={styles.featuresContentContainer}>
      <Features features={features} />
      <Content items={items} />
    </div>
  );
};

export default FeaturesContentWrapper;