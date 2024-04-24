import styles from "./Cart.module.css";
import cartImage from "../../assets/images/shared/desktop/icon-cart.svg";

const Cart = () => {
  return (
    <div className={styles.cartIcon}>
      <a href="#">
        <img src={cartImage} alt="cart icon" />
      </a>
    </div>
  );
};

export default Cart;
