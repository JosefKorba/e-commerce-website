import PropTypes from 'prop-types';
import styles from './CartDropdown.module.css';
import CartItem from '../CartItem/CartItem';
import useCart from '../../../hooks/useCart';

const CartDropdown = ({ cartItems, onCheckout }) => {
  const { clearCart } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartHeader}>
        <h2 className={styles.cartTitle}>Cart ({totalItems})</h2>
        <button className={styles.removeAllButton} onClick={clearCart}>Remove all</button>
      </div>
      <div className={styles.cartItems}>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className={styles.emptyMessage}>Your cart is empty</span>
        )}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.total}>
          <span className={styles.totalText}>Total</span>
          <span className={styles.totalPrice}>$ {totalPrice.toFixed(2)}</span>
        </div>
        <button className={styles.checkoutButton} onClick={onCheckout}>Checkout</button>
      </div>
    </div>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired,
  onCheckout: PropTypes.func.isRequired
};

export default CartDropdown;