import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducers } from './contacts';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthReducer from './auth/auth-reducers';
import loadingReducer from './loading/loading-reducer';
import { errorReducer } from './error';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, AuthReducer),
    contacts: contactsReducers,
    loading: loadingReducer,
    error: errorReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

const STORE = { store, persistor };

export default STORE;
