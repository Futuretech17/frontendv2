// src/components/ProductModal.js
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/ProductModal.css';

const ProductModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-details" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default ProductModal;
