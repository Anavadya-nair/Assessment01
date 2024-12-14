import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductDashboard.module.css';

const ProductDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product Dashboard</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
