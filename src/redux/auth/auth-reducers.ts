import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
  getLoginUserSuccess,
} from './auth-actions';

// import * as actions from './auth-actions';
// type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
// type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialUserState = {
  email: '',
  name: '',
};

const userReducer = createReducer(initialUserState, {
  [getLoginUserSuccess.type]: (_, { payload }) => payload,
  [registerSuccess.type]: (_, { payload }) => payload.user,
  [loginSuccess.type]: (_, { payload }) => payload.user,
  [logoutSuccess.type]: () => initialUserState,
});

const tokenReducer = createReducer('', {
  [registerSuccess.type]: (_, { payload }) => payload.token,
  [loginSuccess.type]: (_, { payload }) => payload.token,
  [logoutSuccess.type]: () => null,
});

const AuthReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
});

export default AuthReducer;
