import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [{id: '1', name: 'John Smith', number: '+300;44400' }];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({name, number}) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          }
        };
      }
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    }
  }
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;