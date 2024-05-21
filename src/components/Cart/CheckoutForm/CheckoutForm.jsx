import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import styles from './CheckoutForm.module.css';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const CheckoutForm = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      paymentMethod: 'e-money',
    });
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (cartItems.length === 0) {
        setIsCartEmpty(true);
        return;
      }
  
      const newErrors = {};
  
      if (!validateEmail(formData.email)) {
        newErrors.email = 'Wrong format';
      }
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        setIsModalOpen(true);
      }
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      clearCart();
      navigate('/');
    };
  
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingCost = 50; 
    const vat = totalPrice * 0.2; 
    const grandTotal = totalPrice + shippingCost + vat;
  
    const orderDetails = {
      items: cartItems,
      totalPrice,
      shippingCost,
      vat,
      grandTotal,
    };
  
    return (
      <div className={styles.checkoutContainer}>
        <div className={styles.formSection}>
          <h1 className={styles.checkoutTitle}>Checkout</h1>
          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
            <div className={styles.billingDetails}>
              <h2>Billing Details</h2>
              <div className={styles.formGroup}>
                <label>
                  Name
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </label>
                <label>
                  Email Address
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                  {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </label>
              </div>
              <label>
                Phone Number
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </label>
            </div>
            <div className={styles.shippingInfo}>
              <h2>Shipping Info</h2>
              <label>
                Address
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
              </label>
              <div className={styles.formGroup}>
                <label>
                  ZIP Code
                  <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} required />
                </label>
                <label>
                  City
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
                </label>
              </div>
              <label>
                Country
                <input type="text" name="country" value={formData.country} onChange={handleInputChange} required />
              </label>
            </div>
            <div className={styles.paymentDetails}>
              <h2>Payment Details</h2>
              <label>
                Payment Method
                <div className={styles.paymentOptions}>
                  <label className={styles.paymentOption}>
                    <input type="radio" name="paymentMethod" value="e-money" checked={formData.paymentMethod === 'e-money'} onChange={handleInputChange} />
                    e-Money
                  </label>
                  <label className={styles.paymentOption}>
                    <input type="radio" name="paymentMethod" value="cash-on-delivery" checked={formData.paymentMethod === 'cash-on-delivery'} onChange={handleInputChange} />
                    Cash on Delivery
                  </label>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className={styles.summarySection}>
          <h2>Summary</h2>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.cartImage} alt={item.name} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <p className={styles.productName}>{item.name}</p>
                  <p className={styles.productQuantity}>x{item.quantity}</p>
                  <p className={styles.productPrice}>$ {item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <div className={styles.totalRow}>
              <span>Total</span>
              <span>$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping</span>
              <span>$ {shippingCost.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>VAT (Included)</span>
              <span>$ {vat.toFixed(2)}</span>
            </div>
            <div className={styles.grandTotal}>
              <span>Grand Total</span>
              <span>$ {grandTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className={styles.checkoutButton} onClick={handleSubmit}>Continue & Pay</button>
          {isCartEmpty && <p className={styles.errorMessage}>Your cart is empty. Please add items to your cart before proceeding.</p>}
        </div>
        <ConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal} orderDetails={orderDetails} />
      </div>
    );
  };
  
  export default CheckoutForm;