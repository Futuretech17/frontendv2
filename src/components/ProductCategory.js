import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/ProductCategory.css';
import surgicalSuppliesImage from '../assets/images/surgical-supplies.jpg';
import hospitalDisposablesImage from '../assets/images/hospital-disposables.jpg';
import pharmaProductsImage from '../assets/images/pharma-products.jpg';
import diagnosticsImage from '../assets/images/diagnostics.jpg';

const ProductCategories = () => {
    const categories = [
        { name: "Surgical Supplies", background: `url(${surgicalSuppliesImage})`, path: '/products/surgical-supplies' },
        { name: "Hospital Disposables", background: `url(${hospitalDisposablesImage})`, path: '/products/hospital-disposables' },
        { name: "Pharma Products", background: `url(${pharmaProductsImage})`, path: '/products/pharma-products' },
        { name: "Diagnostics", background: `url(${diagnosticsImage})`, path: '/products/diagnostics' }
    ];

    return (
        <section className="product-categories">
            <h2>Product Categories</h2>
            <div className="categories-container">
                {categories.map((category, index) => (
                    <div
                        className="category-card"
                        key={index}
                        style={{ backgroundImage: category.background }}
                    >
                        <h3>{category.name}</h3>
                        <Link to= '/products' className="enquire-button">View Products</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCategories;
