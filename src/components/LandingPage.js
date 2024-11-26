import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing">
      <h1>GreenHouse</h1>
      <p>Welcome to GreenHouse! Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products" className="btn">
        Get Started
      </Link>
    </div>
  );
}

export default LandingPage;
