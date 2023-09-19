import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookEntity } from '@shared';

interface BookStoreState {
  value: IBookEntity[];
}

const initialState: BookStoreState = { value: [] };

export const bookStoreSlice = createSlice({
  name: 'bookStore',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBookEntity>) => {
      state.value.push(action.payload);
    },
    resetStore: (state) => {
      state.value = [];
    },
  },
});

export const { addBook } = bookStoreSlice.actions;
export const { resetStore } = bookStoreSlice.actions;

export default bookStoreSlice.reducer;
