import { RegisterType, LoginTypes } from './../../interfaces/interfaces';
import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction<string>('auth/registerRequest');
export const registerSuccess = createAction<RegisterType>(
  'auth/registerSuccess',
);
export const registerError = createAction<string>('auth/registerError');

export const loginRequest = createAction<string>('auth/loginRequest');
export const loginSuccess = createAction<LoginTypes>('auth/loginSuccesss');
export const loginError = createAction<string | undefined>('auth/loginError');

export const logoutRequest = createAction<string>('auth/logoutRequest');
export const logoutSuccess = createAction<string>('auth/logoutSuccess');
export const logoutError = createAction<string>('auth/logoutError');

export const getLoginUserRequest = createAction('auth/getLoginUserRequest');
export const getLoginUserSuccess = createAction('auth/getLoginUserSuccess');
export const getLoginUserError = createAction('auth/getLoginUserError');

// export {
//   registerRequest,
//   registerSuccess,
//   registerError,
//   loginRequest,
//   loginSuccess,
//   loginError,
//   logoutRequest,
//   logoutSuccess,
//   logoutError,
//   getLoginUserRequest,
//   getLoginUserSuccess,
//   getLoginUserError,
// };
