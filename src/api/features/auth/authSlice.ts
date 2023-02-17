import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  isLoggedIn: boolean | null;
}

const initialState: InitialState = {
  isLoggedIn: null,
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
  },
  extraReducers: {},
});

export default isLoggedInSlice.reducer;
export const { setLoginUser, setLogoutUser } = isLoggedInSlice.actions;
