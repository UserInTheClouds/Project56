import { configureStore } from '@reduxjs/toolkit';
import repoReducer from './slices/repoSlice';

export const store = configureStore({
  reducer: {
    repos: repoReducer,
  },
});
