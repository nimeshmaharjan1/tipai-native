import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/auth/index';

export const store = configureStore({
  reducer: {
    authStore: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
