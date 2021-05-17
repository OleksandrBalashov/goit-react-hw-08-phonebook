import { ContactType } from './../../interfaces/interfaces';
import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactError,
  addContactRequest,
  addContactSuccess,
  patchContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  patchContactError,
  patchContactRequest,
  resetContact,
} from '.';
import { resetError } from '../error';
import { AppDispatch } from '../store';
import { GetStateType } from '../../interfaces/types';

export const fetchContacts = () => async (dispatch: AppDispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  } finally {
    setTimeout(() => dispatch(resetError('')), 3000);
  }
};

export const addContact = (contact: ContactType) => async (
  dispatch: AppDispatch,
  getState: GetStateType,
) => {
  const {
    contacts: { items },
  } = getState();

  if (items.find(({ name }) => name === contact.name)) {
    alert(`${contact.name} is already in contacts`);
    return;
  }

  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const patchContacts = (id: number, contact: ContactType) => async (
  dispatch: AppDispatch,
) => {
  dispatch(patchContactRequest());

  try {
    const { data } = await axios.patch(`/contacts/${id}`, contact);

    dispatch(patchContactSuccess(data));
  } catch (error) {
    dispatch(patchContactError(error.message));
  } finally {
    dispatch(resetContact());
  }
};

export const deleteContact = (id: string | undefined) => async (
  dispatch: AppDispatch,
) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
