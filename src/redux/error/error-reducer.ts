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
import { resetError } from '.';

const errorReducer = createReducer('', {
  [fetchContactsError.type]: (_, { payload }) => payload,
  [addContactError.type]: (_, { payload }) => payload,
  [deleteContactError.type]: (_, { payload }) => payload,
  [registerError.type]: (_, { payload }) => payload,
  [loginError.type]: (_, { payload }) => payload,
  [logoutError.type]: (_, { payload }) => payload,
  [getLoginUserError.type]: (_, { payload }) => payload,
  [resetError.type]: (_, { payload }) => payload,
});

export default errorReducer;
