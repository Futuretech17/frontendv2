import axios from 'axios';

const API_BASE_URL = 'https://backendv2-7kje.onrender.com';

export const fetchProducts = (page, limit, searchQuery) => {
    return axios.get(`${API_BASE_URL}/api/products`, {
        params: {
            page,
            limit,
            search: searchQuery,
        },
    });
};
