import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Container from '../components/Layout/Container';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  const handleCheckout = () => {
    // In a real application, this would redirect to a checkout page or process
    alert('Proceeding to checkout!');
    // You could redirect to a checkout page here
    // navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <Container className="py-16 text-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block">
            Continue Shopping
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Cart Header */}
        <div className="grid grid-cols-12 bg-gray-100 p-4 font-semibold text-gray-700">
          <div className="col-span-6 md:col-span-6">Product</div>
          <div className="col-span-2 md:col-span-2 text-center">Price</div>
          <div className="col-span-2 md:col-span-2 text-center">Quantity</div>
          <div className="col-span-2 md:col-span-2 text-center">Total</div>
        </div>
        
        {/* Cart Items */}
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-12 p-4 border-b items-center hover:bg-gray-50">
            <div className="col-span-6 md:col-span-6 flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <Link to={`/product/${item.id}`} className="font-semibold text-gray-800 hover:text-orange-600 transition">
                  {item.name}
                </Link>
                {item.selectedColor && (
                  <p className="text-sm text-gray-600">Color: {item.selectedColor}</p>
                )}
                {item.category && (
                  <p className="text-xs text-gray-500">{item.category}</p>
                )}
              </div>
            </div>
            <div className="col-span-2 md:col-span-2 text-center text-gray-700">£{item.price.toFixed(2)}</div>
            <div className="col-span-2 md:col-span-2 text-center">
              <span className="bg-gray-100 px-3 py-1 rounded-md text-gray-800">{item.quantity}</span>
            </div>
            <div className="col-span-2 md:col-span-2 flex justify-between items-center">
              <span className="font-medium text-gray-800">£{(item.price * item.quantity).toFixed(2)}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                aria-label="Remove item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        
        {/* Cart Summary */}
        <div className="p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-700">Subtotal:</span>
            <span className="font-bold text-xl text-gray-800">£{cartTotal}</span>
          </div>
          <div className="text-sm text-gray-600 mb-6">
            Shipping and taxes calculated at checkout
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link 
              to="/products" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md transition duration-300 text-center flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Continue Shopping
            </Link>
            <button 
              onClick={handleCheckout}
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
