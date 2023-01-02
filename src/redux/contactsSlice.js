import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [addContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContacts.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Генератори actions
export const { filterContacts } = contactsSlice.actions;
// Reducer слайсу
export const contactsReducer = contactsSlice.reducer;
