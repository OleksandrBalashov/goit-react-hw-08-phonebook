import { RootState } from '../store';

export const isAuthenticated = (state: RootState): string =>
  state.auth.user.name;
