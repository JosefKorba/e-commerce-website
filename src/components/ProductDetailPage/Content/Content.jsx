import PropTypes from 'prop-types';
import styles from './Content.module.css';

const Content = ({ items }) => {
  if (!items) {
    return <div className={styles.content}>No items available</div>;
  }

  return (
    <div className={styles.content}>
      <h3 className={styles.contentTitle}>In the Box</h3>
      <ul className={styles.contentList}>
        {items.map((item, index) => (
          <li key={index} className={styles.contentItem}>
            <span className={styles.itemQuantity}>{item.quantity}x</span>
            <span className={styles.itemName}>{item.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Content.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Content;