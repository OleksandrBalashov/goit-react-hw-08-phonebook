import { createSelector } from '@reduxjs/toolkit';
import { ContactType } from '../../interfaces/interfaces';
import { RootState } from '../store';

export const getItems = (state: RootState): ContactType[] =>
  state.contacts.items;
export const getFilter = (state: RootState): string => state.contacts.filter;
export const getTotalCount = (state: RootState): number =>
  getItems(state).length;
export const getEditContact = (state: RootState) => state.contacts.editContact;

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
