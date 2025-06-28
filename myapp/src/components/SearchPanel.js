import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchFilters } from '../features/hotelSlice';
import './SearchPanel.css';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState('');
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSearch = () => {
    dispatch(setSearchFilters({ destination, rooms, adults, children }));
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
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      {/* Check-in */}
      {showCheckIn ? (
        <input
          type="date"
          value={checkIn}
          onChange={(e) => {
            setCheckIn(e.target.value);
            setShowCheckIn(false);
          }}
          onBlur={() => setShowCheckIn(false)}
          autoFocus
        />
      ) : (
        <div className="fake-date-input" onClick={() => setShowCheckIn(true)}>
          {checkIn ? checkIn : 'Check-in'}
        </div>
      )}

      {/* Check-out */}
      {showCheckOut ? (
        <input
          type="date"
          value={checkOut}
          onChange={(e) => {
            setCheckOut(e.target.value);
            setShowCheckOut(false);
          }}
          onBlur={() => setShowCheckOut(false)}
          autoFocus
        />
      ) : (
        <div className="fake-date-input" onClick={() => setShowCheckOut(true)}>
          {checkOut ? checkOut : 'Check-out'}
        </div>
      )}

      {/* Room dropdown */}
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
                    className={`circle ${rooms === num ? 'selected' : ''}`}
                    onClick={() => setRooms(num)}
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

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPanel;
