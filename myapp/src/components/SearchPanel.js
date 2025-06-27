import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/hotelSlice';
import './SearchPanel.css';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-panel">
      <input type="text" placeholder="Destination" />
      <input type="date" placeholder="Check-in" />
      <input type="date" placeholder="Check-out" />
     <div className="dropdown-wrapper" ref={dropdownRef}>
        <div className="dropdown-toggle" onClick={() => setShowDropdown(!showDropdown)}>
          Rooms
        </div>

        {showDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-section rooms">
              <label>Rooms</label>
              <div className="circle-buttons">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`circle${rooms===num?'selected':''}`}
                    onClick={()=>setRooms(num)}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            <div className="dropdown-section">
              <label>Adults</label>
              <input
                type="number"
                min="0"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
              />
            </div>

            <div className="dropdown-section">
              <label>Children</label>
              <input
                type="number"
                min="0"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
              />
            </div>
          </div>
        )}
      </div>

      <input
        type="text"
        placeholder="Search keyword..."
        onChange={handleSearchChange}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchPanel;
