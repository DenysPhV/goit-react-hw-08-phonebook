import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import contacts from 'data/contacts.json';
import { addContact, deleteContact, changeFilter } from './contacts-actions';

const items = createReducer(contacts, {
  [addContact]: (state, action) => [action.payload, ...state],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
