import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/ProductsDetails.css';

const ProductDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleClose = () => {
    setIsModalOpen(false);
    navigate('/products');
  };

  const attributes = [
    { label: 'Product Name', value: product.name },
    { label: 'Category', value: product.category },
    { label: 'Title', value: product.title },
    { label: 'Description', value: product.description },
    { label: 'Size', value: product.size ? product.size.join(', ') : null },
    { label: 'Price', value: product.price ? `$${product.price.toFixed(2)}` : null }
  ];

  return isModalOpen ? (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="product-details" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>X</button>
        
        {/* Product card structure */}
        <div className="product-card">
          
          {/* Left div for the product image */}
          <div className="product-image-container">
            <img
              src={`https://backendv2-7kje.onrender.com/${product.image}`}
              alt={product.name}
              className="product-image"
            />
          </div>
          
          {/* Right div for the product information */}
          <div className="product-info">
            <h2>{product.name}</h2>
            <div className="product-attributes">
              {attributes
                .filter(attr => attr.value)
                .map((attr, index) => (
                  <div key={index} className="product-attribute">
                    <strong>{attr.label}:</strong> {attr.value}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductDetails;
