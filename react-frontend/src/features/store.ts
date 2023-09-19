import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookStoreSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
