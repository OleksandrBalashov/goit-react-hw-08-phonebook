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
} from '../auth';
import { resetError } from '../error';
import { loginError, logoutError } from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const errorReset = dispatch => setTimeout(() => dispatch(resetError('')), 3000);

export const registerUser = user => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post('/users/signup', user);

    token.set(data.token);

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
  } finally {
    errorReset(dispatch);
  }
};

export const loginUser = user => async dispatch => {
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

export const getLoginUser = () => async (dispatch, getState) => {
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

export const logout = () => async dispatch => {
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
