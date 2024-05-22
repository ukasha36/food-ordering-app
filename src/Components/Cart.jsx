import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <p>{item.dish.name} x {item.quantity} = ${item.dish.price * item.quantity}</p>
        </div>
      ))}
      <h3 className="total">Total: ${total}</h3>
    </div>
  );
};

export default Cart;
