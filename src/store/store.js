import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const storeRoot = configureStore({
  reducer: {
    user: userReducer,
  },
})