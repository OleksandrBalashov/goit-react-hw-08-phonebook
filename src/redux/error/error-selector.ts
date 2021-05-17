import { RootState } from '../store';

export const getErrorMessage = (state: RootState): string => state.error;
