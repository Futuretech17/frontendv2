import axios from 'axios';

const INTERNAL_API_URL = "http://backend-4qik:10000";  // Internal address for Render services
const PUBLIC_API_URL = process.env.REACT_APP_API_URL || "https://backend-4qik.onrender.com";  // Public URL

/**
 * Function to fetch products with fallback
 */
export const fetchProducts = async (page, limit, searchQuery = '', category = '') => {
    try {
        // Try Internal API First
        return await axios.get(`${INTERNAL_API_URL}/api/products`, {
            params: { page, limit, search: searchQuery, category: category || undefined },
        });
    } catch (error) {
        console.warn("Internal API failed, switching to public API...");

        // If internal API fails, use Public API
        return axios.get(`${PUBLIC_API_URL}/api/products`, {
            params: { page, limit, search: searchQuery, category: category || undefined },
        });
    }
};
