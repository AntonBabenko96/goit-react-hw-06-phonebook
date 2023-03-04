import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    onAddContact(state, action) {
      console.log(state);
      console.log(action);
      state.contacts.push({
        id: nanoid(),
        name: action.payload.text,
        number: action.payload.number,
      });
    },
    onDeleteContact(state, action) {},
  },
});

export const { onAddContact } = contactSlice.actions;

export default contactSlice.reducer;
