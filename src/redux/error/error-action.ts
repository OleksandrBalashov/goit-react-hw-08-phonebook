import { createAction } from '@reduxjs/toolkit';

export const resetError = createAction<string>('resetError/reset');
