import styles from './Cart.module.css'
import cartImage from '../../assets/images/shared/desktop/icon-cart.svg'

const Cart = () => {
  return (
    <div className={styles.cartIcon}>
        <img src={cartImage} alt="cart icon" />
    </div>
  )
}

export default Cart