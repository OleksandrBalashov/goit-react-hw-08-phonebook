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
import { RegisterType, LoginTypes } from '../../interfaces/interfaces';
import { AppDispatch, RootState } from '../store';

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
    console.log(user);
    dispatch(registerRequest());

    const { data } = await axios.post('/users/signup', user);

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
    const { data } = await axios.post('/users/login', user);

    token.set(data.token);

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error.message));
  } finally {
    errorReset(dispatch);
  }
};

type GetStateType = () => RootState;

export const getLoginUser = () => async (
  dispatch: AppDispatch,
  getState: GetStateType,
) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);
  dispatch(getLoginUserRequest());
  try {
    const { data } = await axios.get('/users/current');

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
