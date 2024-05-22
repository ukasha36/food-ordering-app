import React, { useState, useEffect } from 'react';
import dishes from './Service/Dishes.jsx';
import Dish from "./Components/Dish.jsx";
import Cart from './Components/Cart';
import UserOptions from './Components/Useroption.jsx';
import SplitOptions from './Components/Splitoption.jsx';
 
const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isMultiUser, setIsMultiUser] = useState(() => {
    const savedIsMultiUser = localStorage.getItem('isMultiUser');
    return savedIsMultiUser ? JSON.parse(savedIsMultiUser) : false;
  });
  const [numUsers, setNumUsers] = useState(() => {
    const savedNumUsers = localStorage.getItem('numUsers');
    return savedNumUsers ? JSON.parse(savedNumUsers) : 1;
  });
  const [splitMethod, setSplitMethod] = useState(() => {
    const savedSplitMethod = localStorage.getItem('splitMethod');
    return savedSplitMethod ? JSON.parse(savedSplitMethod) : 'equal';
  });
  const [customSplits, setCustomSplits] = useState(() => {
    const savedCustomSplits = localStorage.getItem('customSplits');
    return savedCustomSplits ? JSON.parse(savedCustomSplits) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('isMultiUser', JSON.stringify(isMultiUser));
  }, [isMultiUser]);

  useEffect(() => {
    localStorage.setItem('numUsers', JSON.stringify(numUsers));
  }, [numUsers]);

  useEffect(() => {
    localStorage.setItem('splitMethod', JSON.stringify(splitMethod));
  }, [splitMethod]);

  useEffect(() => {
    localStorage.setItem('customSplits', JSON.stringify(customSplits));
  }, [customSplits]);

  const addToCart = (dish, quantity) => {
    setCart([...cart, { dish, quantity }]);
  };

  const total = cart.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);

  return (
    <div className="container">
      <h1>Food Ordering App</h1>
      <div className="dish-list">
        {dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
      <div className="user-options-container">
        <UserOptions
          isMultiUser={isMultiUser}
          setIsMultiUser={setIsMultiUser}
          numUsers={numUsers}
          setNumUsers={setNumUsers}
        />
      </div>
      {isMultiUser && (
        <div className="split-options-container">
          <SplitOptions
            splitMethod={splitMethod}
            setSplitMethod={setSplitMethod}
            customSplits={customSplits}
            setCustomSplits={setCustomSplits}
            numUsers={numUsers}
          />
        </div>
      )}
      {isMultiUser && (
        <div>
          <h3>Split Total: ${total}</h3>
          {splitMethod === 'equal' && (
            <p>Each user pays: ${total / numUsers}</p>
          )}
          {splitMethod === 'custom' && (
            <div>
              {customSplits.map((split, index) => (
                <p key={index}>User {index + 1} pays: ${split}</p>
              ))}
              <p>Total custom split: ${customSplits.reduce((a, b) => a + b, 0)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;