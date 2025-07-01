
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    {
      id:'1',
      name: 'Palm Grove Resort',
      address: 'Beach Road, Goa',
      beds: 2,
      baths: 1,
      price: 3200,
      rooms: 1,
      type: 'Resort',
      image: '/images/Hotelimg1.jpg',
    },
    {
      id:'2',
      name: 'Mountain View Homestay',
      address: 'Ooty Hills, Tamil Nadu',
      beds: 3,
      baths: 2,
      price: 4500,
      rooms: 2,
      type: 'Homestay',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
    },
    {
      id:'3',
      name: 'Taj Hotel',
      address: 'Hyderabad, Telangana',
      beds: 6,
      baths: 4,
      price: 6000,
      rooms: 3,
      type: 'Hotel',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60',
    },
    {
      id:'4',
      name: 'Desert Dream Stay',
      address: 'Jaisalmer, Rajasthan',
      beds: 2,
      baths: 1,
      price: 2900,
      rooms: 1,
      type: 'Homestay',
      image: '/images/Hotelimg2.jpg',
    },
    {
      id:'5',
      name: 'Backwater Resort',
      address: 'Alleppey, Kerala',
      beds: 3,
      baths: 2,
      price: 5000,
      rooms: 2,
      type: 'Resort',
      image: '/images/Hotelimg3.jpg',
    },
    {
      id:'6',
      name: 'Snow Valley Hotel',
      address: 'Manali, Himachal Pradesh',
      beds: 4,
      baths: 2,
      price: 5500,
      rooms: 2,
      type: 'Hotel',
      image: '/images/Hotelimg1.jpg',
    },
    {
      id:'7',
      name: 'Green Hills Stay',
      address: 'Coorg, Karnataka',
      beds: 2,
      baths: 1,
      price: 3800,
      rooms: 1,
      type: 'Homestay',
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=60',
    },
    {
      id:'8',
      name: 'Urban Heights Hotel',
      address: 'Bangalore, Karnataka',
      beds: 5,
      baths: 3,
      price: 6200,
      rooms: 3,
      type: 'Hotel',
      image: '/images/Hotelimg2.jpg',
    }
  ],
  searchTerm: '',
  filters: {
    minPrice: undefined,
    maxPrice: undefined,
    rooms: undefined,
    beds: undefined,
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
    },
    clearFilters: (state) => {
      state.filters = {
        minPrice: undefined,
        maxPrice: undefined,
        rooms: undefined,
        beds: undefined,
        type: '',
      };
    }
  },
});

export const {
  addHotel,
  setSearchTerm,
  setSearchFilters,
  clearFilters,
} = hotelSlice.actions;

export const selectFilteredHotels = (state) => {
  const term = state.hotels.searchTerm.toLowerCase();
  const { minPrice, maxPrice, rooms, beds, type } = state.hotels.filters;

  console.log('FILTERS:', { minPrice, maxPrice, rooms, beds, type });

  return state.hotels.list.filter((hotel) => {
    const matchesTerm =
      hotel.name.toLowerCase().includes(term) ||
      hotel.address.toLowerCase().includes(term);

    const matchesPrice =
      (minPrice === undefined || hotel.price >= minPrice) &&
      (maxPrice === undefined || hotel.price <= maxPrice);

    const matchesRooms = rooms === undefined || hotel.rooms === rooms;
    const matchesBeds = beds === undefined || hotel.beds === beds;
    const matchesType = !type || hotel.type.toLowerCase() === type.toLowerCase();

    return matchesTerm && matchesPrice && matchesRooms && matchesBeds && matchesType;
  });
};

export default hotelSlice.reducer;
