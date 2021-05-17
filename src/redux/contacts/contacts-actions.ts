import { createAction } from '@reduxjs/toolkit';
import { ContactType } from '../../interfaces/interfaces';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactRequest',
);
export const fetchContactsSuccess = createAction<ContactType[] | undefined>(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction<string>(
  'contacts/fetchContactsError',
);

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction<ContactType>(
  'contact/addContactSuccess',
);
export const addContactError = createAction<string>('contact/addContactError');

export const deleteContactRequest = createAction('contact/DeleteRequest');
export const deleteContactSuccess = createAction<string | undefined>(
  'contact/DeleteSuccess',
);
export const deleteContactError = createAction<string>('contact/DeleteError');

export const patchContactRequest = createAction('contact/patchRequest');
export const patchContactSuccess = createAction<ContactType[]>(
  'contact/patchSuccess',
);
export const patchContactError = createAction<string>('contact/patchError');

export const editContact = createAction<ContactType | undefined>(
  'contact/editContact',
);
export const resetContact = createAction('contact/resetEditContact');

export const filterContacts = createAction<string | undefined>(
  'contact/Filter',
);
