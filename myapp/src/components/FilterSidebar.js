import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Price Range</label>
        <input type="number" placeholder="Min" />
        <input type="number" placeholder="Max" />
      </div>

      <div className="filter-group">
        <label>Rooms</label>
        <div className="filter-options">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>

      <div className="filter-group">
        <label>Beds</label>
        <div className="filter-options">
          <button>1</button>
          <button>2</button>
        </div>
      </div>

      <div className="filter-group">
        <label>Property Type</label>
        <div className="filter-options">
          <button>Home Stay</button>
          <button>Resort</button>
          <button>Hotel</button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
