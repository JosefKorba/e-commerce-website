import useCart from '../../hooks/useCart';
import CartItem from './CartItem/CartItem';

const Checkout = () => {
    const { cartItems } = useCart();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Order submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
            <button type="submit">Place Order</button>
        </form>
    );
};

export default Checkout;