import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [view, setView] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = () => {
    axios.get('/api/cart/').then(res => setCartItems(res.data));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = (product) => {
    axios.post('/api/cart/', product).then(res => {
      setCartItems(res.data);
    });
  };

  const removeFromCart = (id) => {
    axios.delete('/api/cart/', { data: { id } }).then(res => {
      setCartItems(res.data);
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header 
        cartCount={cartCount} 
        toggleView={() => setView(view === 'products' ? 'cart' : 'products')} 
      />
      {view === 'products' ? <ProductList addToCart={addToCart} /> : <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
    </div>
  );
}

export default App;