import React, { useState } from 'react';

const CategoryFilter = ({ onCategoryChange }) => {
  const [category, setCategory] = useState('all');  // Initialize with 'all'

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onCategoryChange(selectedCategory);  // Send the selected category to the parent
  };

  return (
    <div className="category-filter">
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All Categories</option>
        <option value="Hospital Disposables">Hospital Disposables</option>
        <option value="Surgical Supplies">Surgical Supplies</option>
        {/* Add more options based on your categories */}
      </select>
    </div>
  );
};

export default CategoryFilter;
