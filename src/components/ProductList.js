import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('none');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    axios.get('/api/products/').then(res => setProducts(res.data));
  }, []);

  const categories = ['All', 'Men', 'Women', 'Kids'];

  let filtered = products
    .filter(p => category === 'All' || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  if (sort === 'low') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'high') filtered.sort((a, b) => b.price - a.price);

  return (
    <div>
      <div className="controls">
        <input placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="none">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>
      </div>

      <div className="grid">
        {filtered.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;