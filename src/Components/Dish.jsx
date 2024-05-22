import React, { useState } from 'react';

const Dish = ({ dish, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(dish, quantity);
      setQuantity(0);
    }
  };

  return (
    <div className="dish">
      <h3>{dish.name} - ${dish.price}</h3>
      <input
        type="number"
        value={quantity}
        min="0"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Dish;
