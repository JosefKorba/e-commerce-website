import { useContext } from 'react';
import { CartContext } from '../components/Cart/CartContext/CartContext';

const useCart = () => {
  const { cartItems, addToCart, removeFromCart, updateCartItem, clearCart } = useContext(CartContext);

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    isItemInCart,
    getItemQuantity,
  };
};

export default useCart;