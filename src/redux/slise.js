import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'conatacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addConatact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(newContact) {
        return { payload: { ...newContact, id: nanoid() } };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
    },
    getFilterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addConatact, deleteContact, getFilterContact } =
  contactSlice.actions;
export default contactSlice.reducer;
