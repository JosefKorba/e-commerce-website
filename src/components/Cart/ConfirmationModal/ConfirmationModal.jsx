import PropTypes from 'prop-types';
import styles from './ConfirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onClose, orderDetails }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Thank you for your order</h2>
        <p className={styles.description}>You will receive an email confirmation shortly.</p>
        <div className={styles.orderSummary}>
          <div className={styles.items}>
            {orderDetails.items.map((item, index) => (
              <div key={index} className={styles.item}>
                <img src={item.cartImage} alt={item.name} className={styles.itemImage} /> 
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemQuantity}>x{item.quantity}</p>
                  <p className={styles.itemPrice}>$ {item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <div className={styles.totalRow}>
              <span>Total</span>
              <span>$ {orderDetails.totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping</span>
              <span>$ {orderDetails.shippingCost.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>VAT (Included)</span>
              <span>$ {orderDetails.vat.toFixed(2)}</span>
            </div>
            <div className={styles.grandTotal}>
              <span>Grand Total</span>
              <span>$ {orderDetails.grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button className={styles.closeButton} onClick={onClose}>Back to Home</button>
      </div>
    </div>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  orderDetails: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      cartImage: PropTypes.string.isRequired, 
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })).isRequired,
    totalPrice: PropTypes.number.isRequired,
    shippingCost: PropTypes.number.isRequired,
    vat: PropTypes.number.isRequired,
    grandTotal: PropTypes.number.isRequired,
  }).isRequired,
};

export default ConfirmationModal;