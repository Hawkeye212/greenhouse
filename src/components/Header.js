import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h1>GreenHouse</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
}

export default Header;
