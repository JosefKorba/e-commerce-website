import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const handlePayment = () => {
    
        console.log('Processing payment...');
        navigate('/success'); 
    };

    return (
        <div>
            <h1>Checkout</h1>
            {cartItems.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
            <button onClick={handlePayment}>Continue and Pay</button>
        </div>
    );
};

export default CheckoutPage;