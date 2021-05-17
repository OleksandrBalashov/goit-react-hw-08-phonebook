import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
  filterContacts,
  // patchContactSuccess,
  editContact,
  resetContact,
} from '.';

const itemsReducer = createReducer([], {
  [fetchContactsSuccess.type]: (_, { payload }) => payload,
  [addContactSuccess.type]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  // [patchContactSuccess.type]: (state, { payload }) =>
  // state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const initialContact = {
  name: null,
  number: null,
  id: null,
};

const editReducer = createReducer(initialContact, {
  [editContact.type]: (_, { payload }) => payload,
  [resetContact.type]: () => '',
});

const filterReducer = createReducer('', {
  [filterContacts.type]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  editContact: editReducer,
});
