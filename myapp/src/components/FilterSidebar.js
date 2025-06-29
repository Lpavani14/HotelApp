import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchFilters, clearFilters } from '../features/hotelSlice';
import { useNavigate } from 'react-router-dom';
import './FilterSidebar.css';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRooms, setSelectedRooms] = useState(null);
  const [selectedBeds, setSelectedBeds] = useState(null);
  const [propertyType, setPropertyType] = useState('');

  const handleFilter = () => {
    dispatch(
      setSearchFilters({
        minPrice: minPrice ? parseInt(minPrice) : undefined,
        maxPrice: maxPrice ? parseInt(maxPrice) : undefined,
        rooms: selectedRooms,
        beds: selectedBeds,
        type: propertyType,
      })
    );
    navigate('/home');
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());         // 🔁 Reset Redux filter state
    setMinPrice('');
    setMaxPrice('');
    setSelectedRooms(null);
    setSelectedBeds(null);
    setPropertyType('');
    navigate('/home');                // ✅ Navigate back to home
  };

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      <div className="filter-group">
        <label>Price Range</label>
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Rooms</label>
        <div className="filter-options">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className={selectedRooms === num ? 'active' : ''}
              onClick={() => setSelectedRooms(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label>Beds</label>
        <div className="filter-options">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              className={selectedBeds === num ? 'active' : ''}
              onClick={() => setSelectedBeds(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label>Property Type</label>
        <div className="filter-options">
          {['Homestay', 'Resort', 'Hotel'].map((type) => (
            <button
              key={type}
              className={propertyType === type ? 'active' : ''}
              onClick={() => setPropertyType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-buttons">
        <button className="apply-filter" onClick={handleFilter}>
          Apply Filters
        </button>
        <button className="clear-filter" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
