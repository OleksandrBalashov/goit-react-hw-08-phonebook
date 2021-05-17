import axios from 'axios';
import {
  getLoginUserError,
  getLoginUserRequest,
  getLoginUserSuccess,
  loginRequest,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from '.';
import { resetError } from '../error';
import { loginError, logoutError } from './auth-actions';
import {
  RegisterType,
  LoginTypes,
  AuthTypes,
} from '../../interfaces/interfaces';
import { AppDispatch } from '../store';
import { GetStateType } from '../../interfaces/types';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const errorReset = (dispatch: AppDispatch) =>
  setTimeout(() => dispatch(resetError('')), 3000);

export const registerUser = (user: RegisterType) => async (
  dispatch: AppDispatch,
) => {
  try {
    dispatch(registerRequest());
    console.log('user', user);

    const { data } = await axios.post<AuthTypes>('/users/signup', user);
    console.log('axios data', data);
    token.set(data.token);

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  } finally {
    errorReset(dispatch);
  }
};

export const loginUser = (user: LoginTypes) => async (
  dispatch: AppDispatch,
) => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post<AuthTypes>('/users/login', user);

    token.set(data.token);

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  } finally {
    errorReset(dispatch);
  }
};

export const getLoginUser = () => async (
  dispatch: AppDispatch,
  getState: GetStateType,
) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  try {
    token.set(persistedToken);

    dispatch(getLoginUserRequest());

    const { data } = await axios.get<LoginTypes>('/users/current');

    dispatch(getLoginUserSuccess(data));
  } catch (error) {
    dispatch(getLoginUserError(error.message));
  } finally {
    errorReset(dispatch);
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();

    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  } finally {
    errorReset(dispatch);
  }
};
