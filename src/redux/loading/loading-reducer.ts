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
  [fetchContactsRequest.type]: () => true,
  [fetchContactsSuccess.type]: () => false,
  [fetchContactsError.type]: () => false,

  [addContactRequest.type]: () => true,
  [addContactSuccess.type]: () => false,
  [addContactError.type]: () => false,

  [patchContactRequest.type]: () => true,
  [patchContactSuccess.type]: () => false,
  [patchContactError.type]: () => false,

  [deleteContactRequest.type]: () => true,
  [deleteContactSuccess.type]: () => false,
  [deleteContactError.type]: () => false,

  [registerRequest.type]: () => true,
  [registerSuccess.type]: () => false,
  [registerError.type]: () => false,

  [loginRequest.type]: () => true,
  [loginSuccess.type]: () => false,
  [loginError.type]: () => false,

  [logoutRequest.type]: () => true,
  [logoutSuccess.type]: () => false,
  [logoutError.type]: () => false,

  [getLoginUserRequest.type]: () => true,
  [getLoginUserSuccess.type]: () => false,
  [getLoginUserError.type]: () => false,
});

export default loadingReducer;
