import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { FaWhatsapp, FaEye } from 'react-icons/fa'; // Import the icons
import '../styles/ProductCard.css';

const ProductCardMain = ({ product }) => {
  return (
    <div className="product-card-main">
      <div className="product-image-container-main">
        <img
          src={`https://backendv2-7kje.onrender.com/${product.image}`}
          alt={product.name}
          className="product-image-main"
        />
        {/* View Details icon */}
        <Link to={`/products/${product._id}`} state={{ product: product }} className="view-details-icon-main">
            <FaEye className="view-details-icon-img-main" />
        </Link>
      </div>

      <div className="product-info-main">
        <h3 className="product-name-main">{product.name}</h3>
        <p className="product-category-main">{product.category}</p>
        <p className="product-description-main">{product.description}</p>

        {/* WhatsApp Icon and Link */}
        <a
          href={`https://wa.me/254714687727?text=I'm%20interested%20in%20${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-enquiry-main"
        >
          <FaWhatsapp className="whatsapp-icon-main" /> Enquire More
        </a>
      </div>
    </div>
  );
};

export default ProductCardMain;
