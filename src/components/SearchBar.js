// src/components/SearchBar.js
import React, { useState } from 'react';
import '../styles/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle changes in the search input field
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission or pressing "Enter"
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery); // Trigger search on parent component
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search products by name"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
