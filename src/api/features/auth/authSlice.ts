import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface InitialState {
  isLoggedIn: boolean;
  userName: string;
}

const initialState: InitialState = {
  isLoggedIn: false,
  userName: 'stranger',
};

const isLoggedInSlice = createSlice({
  name: 'logginStatus',
  initialState,
  reducers: {
    setLoginUser: (state) => {
      state.isLoggedIn = true;
    },
    setLogoutUser: (state) => {
      state.isLoggedIn = false;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
  extraReducers: {},
});

export default isLoggedInSlice.reducer;
export const { setLoginUser, setLogoutUser, setUserName } = isLoggedInSlice.actions;
