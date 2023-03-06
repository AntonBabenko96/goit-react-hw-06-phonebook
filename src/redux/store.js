import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './slise';

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});
