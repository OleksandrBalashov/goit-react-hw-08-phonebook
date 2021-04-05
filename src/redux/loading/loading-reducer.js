import { createReducer } from '@reduxjs/toolkit';
import {
  getLoginUserError,
  getLoginUserRequest,
  getLoginUserSuccess,
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from '../auth';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  patchContactError,
  patchContactRequest,
  patchContactSuccess,
} from '../contacts';

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [patchContactRequest]: () => true,
  [patchContactSuccess]: () => false,
  [patchContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,

  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,

  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,

  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,

  [getLoginUserRequest]: () => true,
  [getLoginUserSuccess]: () => false,
  [getLoginUserError]: () => false,
});

export default loadingReducer;
