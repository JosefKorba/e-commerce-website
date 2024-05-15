import useCart from '../../../hooks/useCart';
import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
  const { removeFromCart, updateCartItem } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleQuantityChange = (e) => {
    updateCartItem({ ...item, quantity: parseInt(e.target.value, 10) });
  };

  const totalPrice = item.price * item.quantity;

  return (
    <div className={styles.cartItem}>
      <img className={styles.productImage} src={item.cartImage} alt={item.name} />
      <div className={styles.productInfo}>
        <h4 className={styles.productName}>{item.name}</h4>
        <p className={styles.productPrice}>$ {totalPrice.toFixed(2)}</p>
        <div className={styles.quantityControl}>
          <button className={styles.quantityButton} onClick={() => updateCartItem({ ...item, quantity: Math.max(item.quantity - 1, 1) })}>-</button>
          <input
            className={styles.quantityInput}
            value={item.quantity}
            min="1"
          />
          <button className={styles.quantityButton} onClick={() => updateCartItem({ ...item, quantity: item.quantity + 1 })}>+</button>
          <button className={styles.removeButton} onClick={handleRemove}>X</button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cartImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;