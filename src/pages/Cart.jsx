// // Cart.jsx
// import React from 'react';

// const Cart = () => {
//   return (
//     <div className="container mx-auto mt-8 p-4 text-center">
//       <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
//       {/* Add cart content */}
//     </div>
//   );
// }

// export default Cart;

// Cart.jsx
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, image: 'product2.jpg' },
    // Add more items as needed
  ]);

  const [coupons, setCoupons] = useState('');
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(cartItems));

  // Function to calculate the total price
  function calculateTotalPrice(items) {
    return items.reduce((total, item) => total + item.price, 0);
  }

  // Function to handle removing an item from the cart
  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    setTotalPrice(calculateTotalPrice(updatedCart));
  };

  // Function to handle applying coupons
  const handleApplyCoupons = () => {
    // Add logic to apply coupons
    // For simplicity, we'll just log the applied coupons
    console.log('Applied Coupons:', coupons);
  };

  // Function to handle checkout
  const handleCheckout = () => {
    // Add logic for the checkout process
    // For simplicity, we'll just log a message
    console.log('Checkout successful!');
  };

  return (
    <div className="container mx-auto mt-8 p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-300 p-4">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Total Price: ${totalPrice}</h3>
        <div className="mt-4">
          <label className="block mb-2">
            Coupons:
            <input
              type="text"
              value={coupons}
              onChange={(e) => setCoupons(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
          <button
            onClick={handleApplyCoupons}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Apply Coupons
          </button>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Summary of Interests</h3>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Payment Methods</h3>
        <ul className="mt-2">
          <li>Credit Card</li>
          <li>PayPal</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          {/* Add more payment methods as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Cart;

