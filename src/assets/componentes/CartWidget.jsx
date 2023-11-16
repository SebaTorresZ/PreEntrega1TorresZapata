import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className="cart-widget" style={{position: 'absolute', right: 30}}>
      <FaShoppingCart />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
