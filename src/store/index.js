import { configureStore } from '@reduxjs/toolkit';
import analyticsReducer from './slices/analyticsSlice';

export const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
  },
});

export default store;
