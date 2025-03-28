import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import HeroProductImage from '../assets/images/products-page.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { fetchProducts } from '../utils/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState(null);
  
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category') || "Our Products";

  const productsPerPage = 12; 

  // 🔹 Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]); // Runs when the category changes

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchProducts(currentPage, productsPerPage, searchQuery, category);
        setProducts(response.data.products);
        setTotalProducts(response.data.total);
      } catch (err) {
        setError(`Error fetching products: ${err.message}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [currentPage, searchQuery, category]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="products-page">
      <Navbar />
      
      <HeroSection
        title={category}  // Dynamically update title based on category
        subtitle="Explore a wide range of medical and pharmaceutical supplies."
        backgroundImage={HeroProductImage}
      />

      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      {error && <div className="error-message">{error}</div>}
      {loading && <div className="loading-message">Loading products...</div>}

      <div className="product-list">
        {!loading && products.length === 0 && !error && <p>No products found.</p>}
        <div className="product-cards">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

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
