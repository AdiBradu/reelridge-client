import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// types
import { UpcomingProps } from '../../../types/types';

interface InitialState {
  watchLaterMovies: UpcomingProps[];
}

const initialState: InitialState = {
  watchLaterMovies: [],
};

const watchLaterMoviesSlice = createSlice({
  name: 'upcomingMovies',
  initialState,
  reducers: {
    setWatchLaterMovies: (state, action: PayloadAction<UpcomingProps[]>) => {
      state.watchLaterMovies = action.payload;
    },
    appendWatchLaterMovie: (state, action: PayloadAction<UpcomingProps>) => {
      state.watchLaterMovies = [...state.watchLaterMovies, action.payload];
    },
  },
  extraReducers: {},
});

export default watchLaterMoviesSlice.reducer;
export const { setWatchLaterMovies, appendWatchLaterMovie } =
  watchLaterMoviesSlice.actions;
