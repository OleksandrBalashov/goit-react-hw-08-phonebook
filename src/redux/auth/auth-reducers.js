import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getLoginUserSuccess,
} from './auth-actions';

const initialUserState = {
  email: null,
  name: null,
};

const userReducer = createReducer(initialUserState, {
  [getLoginUserSuccess]: (_, { payload }) => payload,
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
});

const tokenReducer = createReducer('', {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const AuthReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
});

export default AuthReducer;
