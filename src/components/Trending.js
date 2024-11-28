import React, { useState, useEffect } from 'react';
import '../styles/Trending.css'; // Make sure to style the section
const Trending = () => {
  // State to store the trending products
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    // Fetch trending products from the backend
    fetch('https://backendv2-7kje.onrender.com/api/products/trending')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch trending products');
        }
        return response.json();
      })
      .then(data => {
        setTrendingProducts(data); // Set the fetched products to state
        setLoading(false); // Turn off loading once data is fetched
      })
      .catch(error => {
        setError(error.message); // Handle errors if any
        setLoading(false); // Turn off loading
      });
  }, []); // Empty dependency array to run this effect only once when component mounts

  // If still loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If an error occurred while fetching data, show an error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="trending-section">
      <h2>Trending Products</h2>
      <div className="trending-products">
        {trendingProducts.length > 0 ? (
          trendingProducts.map((product) => (
            <div key={product._id} className="trending-card">
              <img
                src={`https://backendv2-7kje.onrender.com/${product.image}`} // Assuming your backend serves static images
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
            </div>
          ))
        ) : (
          <p>No trending products available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default Trending;
