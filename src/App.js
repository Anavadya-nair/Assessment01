import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDashboard from './components/ProductDashboard';
import AddProductForm from './components/AddProductForm';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductDashboard />} />
      <Route path="/add-product" element={<AddProductForm />} />
    </Routes>
  </Router>
);

export default App;
