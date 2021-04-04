import { createReducer } from '@reduxjs/toolkit';
import {
  getLoginUserError,
  loginError,
  logoutError,
  registerError,
} from '../auth';
import {
  addContactError,
  deleteContactError,
  fetchContactsError,
} from '../contacts';
import { resetError } from '../error';

const setErorPayload = (_, { payload }) => payload;

const errorReducer = createReducer('', {
  [fetchContactsError]: setErorPayload,
  [addContactError]: setErorPayload,
  [deleteContactError]: setErorPayload,
  [registerError]: setErorPayload,
  [loginError]: setErorPayload,
  [logoutError]: setErorPayload,
  [getLoginUserError]: setErorPayload,
  [resetError]: (_, { payload }) => payload,
});

export default errorReducer;
