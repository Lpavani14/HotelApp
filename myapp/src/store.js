import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import hotelReducer from './features/hotelSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    hotels: hotelReducer,
  },
});
