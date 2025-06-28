import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      name: 'Palm Grove Resort',
      address: 'Beach Road, Goa',
      beds: 2,
      baths: 1,
      price: 3200,
      rooms: 1,
      type: 'Resort',
      image: "/images/Hotelimg2.jpg",
    },
    {
      name: 'Mountain View Homestay',
      address: 'Ooty Hills, Tamil Nadu',
      beds: 3,
      baths: 2,
      price: 4500,
      rooms: 2,
      type: 'Homestay',
      image: "/images/Hotelimg1.jpg",
    },
    {
      name:'Taj Hotel',
      address:'Hyderabad',
      beds: 6,
      baths: 4,
      price: 6000,
      rooms: 3,
      type: 'Hotel',
      image:"/images/Hotelimg3.jpg",
    }
  ],
  searchTerm: '',
  filters: {
    minPrice: null,
    maxPrice: null,
    rooms: null,
    beds: null,
    type: '',
  },
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    addHotel: (state, action) => {
      state.list.push(action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
});

export const { addHotel, setSearchTerm, setSearchFilters } = hotelSlice.actions;

// Selector with filter logic
export const selectFilteredHotels = (state) => {
  const term = state.hotels.searchTerm.toLowerCase();
  const { minPrice, maxPrice, rooms, beds, type } = state.hotels.filters;

  return state.hotels.list.filter((hotel) => {
    const matchesTerm =
      hotel.name.toLowerCase().includes(term) ||
      hotel.address.toLowerCase().includes(term);

    const matchesPrice =
      (!minPrice || hotel.price >= minPrice) &&
      (!maxPrice || hotel.price <= maxPrice);

    const matchesRooms = !rooms || hotel.rooms === rooms;
    const matchesBeds = !beds || hotel.beds === beds;
    const matchesType = !type || hotel.type.toLowerCase() === type.toLowerCase();

    return matchesTerm && matchesPrice && matchesRooms && matchesBeds && matchesType;
  });
};

export default hotelSlice.reducer;
