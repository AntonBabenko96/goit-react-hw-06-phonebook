import { configureStore } from '@reduxjs/toolkit';
import contactSlise from './contactSlise';

export default configureStore({
  reducer: { contacts: contactSlise },
});
