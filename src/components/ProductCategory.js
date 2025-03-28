import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for redirection
import '../styles/ProductCategory.css';
import surgicalSuppliesImage from '../assets/images/surgical-supplies.jpg';
import hospitalDisposablesImage from '../assets/images/hospital-disposables.jpg';
import pharmaProductsImage from '../assets/images/pharma-products.jpg';
import diagnosticsImage from '../assets/images/diagnostics.jpg';

const ProductCategories = () => {
    const navigate = useNavigate(); // Initialize navigation

    const categories = [
        { name: "Surgical Supplies", background: `url(${surgicalSuppliesImage})`, path: 'Surgical Supplies' },
        { name: "Hospital Disposables", background: `url(${hospitalDisposablesImage})`, path: 'Hospital Disposables' },
        { name: "Pharma Products", background: `url(${pharmaProductsImage})`, path: 'Pharma Products' },
        { name: "Diagnostics", background: `url(${diagnosticsImage})`, path: 'Diagnostics' }
    ];

    const handleCategoryClick = (category) => {
        const url = `/products?category=${encodeURIComponent(category)}`;
        console.log("Navigating to:", url); // Debugging: Logs the URL to the console
        navigate(url);
    };

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
                        <button 
                            className="enquire-button"
                            onClick={() => handleCategoryClick(category.path)}
                        >
                            View Products
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductCategories;
