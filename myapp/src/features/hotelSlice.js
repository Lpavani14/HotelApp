
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      name: 'Palm Grove Resort',
      address: 'Beach Road, Goa',
      beds: 2,
      baths: 1,
      price: 3200,
      image: "/images/Hotelimg2.jpg",
    },
    {
      name: 'Mountain View Homestay',
      address: 'Ooty Hills, Tamil Nadu',
      beds: 3,
      baths: 2,
      price: 4500,
      image: "/images/Hotelimg1.jpg",
    },
    {
      name:'Taj Hotel',
      address:'Hyderabad',
      beds:6,
      baths:4,
      price:6000,
      image:"/images/Hotelimg3.jpg",
    }
  ],
  searchTerm: '',
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
  },
});

export const { addHotel, setSearchTerm } = hotelSlice.actions;

// Selector to get filtered hotels
export const selectFilteredHotels = (state) => {
  const term = state.hotels.searchTerm.toLowerCase();
  return state.hotels.list.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(term) ||
      hotel.address.toLowerCase().includes(term)
  );
};

export default hotelSlice.reducer;
