import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookEntity } from '@shared';

interface UserState {
  isAuthenticated: boolean;
}

const initialState: UserState = { isAuthenticated: false };

export const userSlice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
