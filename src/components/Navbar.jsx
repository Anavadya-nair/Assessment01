import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to="/" className={styles.navlink}>Home</Link>
    <Link to="/add-product" className={styles.navlink}>Add Product</Link>
  </nav>
);

export default Navbar;
