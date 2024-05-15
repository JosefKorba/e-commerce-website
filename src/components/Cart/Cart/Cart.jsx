import { useState } from 'react';
import useCart from '../../../hooks/useCart';
import styles from "./Cart.module.css";
import cartImage from "../../../assets/images/shared/desktop/icon-cart.svg";
import CartDropdown from '../CartDropdown/CartDropdown';

const Cart = () => {
  const { cartItems } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  const toggleCartDropdown = () => setIsVisible(!isVisible);

  const handleCheckout = () => {
    
   
  };

  return (
    <div className={styles.cartIcon}>
      <button className={styles.cartButton} onClick={toggleCartDropdown}>
        <img className={styles.cartImage} src={cartImage} alt="Cart icon" />
        {cartItems.length > 0 && (
          <span className={styles.itemCount}>
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>
      {isVisible && <CartDropdown cartItems={cartItems} onCheckout={handleCheckout} />}
    </div>
  );
};

export default Cart;
