import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// types
import { UpcomingProps } from '../../../types/types';

interface InitialState {
  upcomingMovies: UpcomingProps[];
}

const initialState: InitialState = {
  upcomingMovies: [],
};

const upcomingMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState,
  reducers: {
    setUpcomingMovies: (state, action: PayloadAction<UpcomingProps[]>) => {
      state.upcomingMovies = [...state.upcomingMovies, ...action.payload];
    },
  },
  extraReducers: {},
});

export default upcomingMoviesSlice.reducer;
export const { setUpcomingMovies } = upcomingMoviesSlice.actions;
