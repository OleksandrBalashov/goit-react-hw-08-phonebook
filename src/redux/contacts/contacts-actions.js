import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const deleteContactRequest = createAction('contact/DeleteRequest');
export const deleteContactSuccess = createAction('contact/DeleteSuccess');
export const deleteContactError = createAction('contact/DeleteError');

export const patchContactRequest = createAction('contact/patchRequest');
export const patchContactSuccess = createAction('contact/patchSuccess');
export const patchContactError = createAction('contact/patchError');

export const editContact = createAction('contact/editContact');
export const resetContact = createAction('contact/resetEditContact');

export const filterContacts = createAction('contact/Filter');
