// src/pages/products.js
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import HeroProductImage from '../assets/images/products-page.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component
import SearchBar from '../components/SearchBar';     // Import the SearchBar component
import Pagination from '../components/Pagination';   // Import the Pagination component
import { fetchProducts } from '../utils/api';        // API utility to fetch products

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState(null);

  const productsPerPage = 12; // Define how many products per page

  // Fetch products when the page changes or search query changes
  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchProducts(currentPage, productsPerPage, searchQuery);
        setProducts(response.data.products);
        setTotalProducts(response.data.total);
      } catch (err) {
        setError(`Error fetching products: ${err.message}`); // Corrected syntax for error handling
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [currentPage, searchQuery]);

  // Handle search input
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };

  return (
    <div className="products-page">
      <Navbar />
      
      <HeroSection
        title="Our Products"
        subtitle="Explore a wide range of medical and pharmaceutical supplies."
        backgroundImage={HeroProductImage} // Pass the specific image
      />

      {/* Search Bar */}
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Error Message */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading Indicator */}
      {loading && <div className="loading-message">Loading products...</div>}

      {/* Product List */}
      <div className="product-list">
        {!loading && products.length === 0 && !error && (
          <p>No products found.</p>
        )}
        <div className="product-cards">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={totalProducts}
        itemsPerPage={productsPerPage}
        onPageChange={setCurrentPage}
      />

      <Footer />
    </div>
  );
};

export default ProductsPage;
