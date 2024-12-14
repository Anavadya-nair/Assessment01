import React, { useState } from 'react';
import styles from '../styles/AddProductForm.module.css';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    image: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="productName"
        placeholder="Product Name"
        value={formData.productName}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />
      <input
        className={styles.input}
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
