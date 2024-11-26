import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ShoppingCart() {
  const { cart, incrementItem, decrementItem, removeItem } = useContext(CartContext);

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <div>
                  <button onClick={() => decrementItem(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementItem(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <p>Total Cost: ${totalCost.toFixed(2)}</p>
          <button>Checkout (Coming Soon)</button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
