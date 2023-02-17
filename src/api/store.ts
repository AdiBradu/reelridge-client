import { configureStore } from '@reduxjs/toolkit';
import isLoggedInReducer from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: isLoggedInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
