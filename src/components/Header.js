import React from 'react';

const Header = ({ cartCount, toggleView }) => {
  return (
    <header>
      <h1>Innerwear Store</h1>
      <button className="cart-btn" onClick={toggleView}>
        🛒 Cart ({cartCount})
      </button>
    </header>
  );
};

export default Header;