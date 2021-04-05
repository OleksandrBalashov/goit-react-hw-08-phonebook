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
} from '../contacts';
import { resetError } from '../error';

export const fetchContacts = () => async dispatch => {
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

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const patchContacts = (id, contact) => async dispatch => {
  dispatch(patchContactRequest());

  try {
    const { data } = await axios.patch(`/contacts/${id}`, contact);

    dispatch(patchContactSuccess(data));
  } catch (error) {
    dispatch(patchContactError(error.message));
  } finally {
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
