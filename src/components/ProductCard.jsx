import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => (
  <div className={styles.card}>
    <img src={product.image} alt={product.title} className={styles.image} />
    <div className={styles.title}>{product.title}</div>
    <div className={styles.price}>${product.price}</div>
    <div className={styles.category}>{product.category}</div>
  </div>
);

export default ProductCard;
