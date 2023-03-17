import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  activeSlideUpcomingMovies: number;
  activeSlideWatchLaterMovies: number;
  activeSlideSearchedMovies: number;
  pageNumberUpcomingMovies: number;
  pageNumberSearchedMovies: number;
}

const initialState: InitialState = {
  activeSlideUpcomingMovies: 0,
  activeSlideWatchLaterMovies: 0,
  activeSlideSearchedMovies: 0,
  pageNumberUpcomingMovies: 1,
  pageNumberSearchedMovies: 1,
};

const movieSlice = createSlice({
  name: 'activeSlide',
  initialState,
  reducers: {
    setActiveSlideUpcomingMovies: (state, action: PayloadAction<number>) => {
      state.activeSlideUpcomingMovies = action.payload;
    },
    setActiveSlideWatchLaterMovies: (state, action: PayloadAction<number>) => {
      state.activeSlideWatchLaterMovies = action.payload;
    },
    setActiveSlideSearchedMovies: (state, action: PayloadAction<number>) => {
      state.activeSlideSearchedMovies = action.payload;
    },
    setPageNumberUpcomingMovies: (state, action: PayloadAction<number>) => {
      state.pageNumberUpcomingMovies = action.payload + 1;
    },
    setPageNumberSearchedMovies: (state, action: PayloadAction<number>) => {
      state.pageNumberSearchedMovies = action.payload + 1;
    },
  },
  extraReducers: {},
});

export default movieSlice.reducer;
export const {
  setActiveSlideUpcomingMovies,
  setActiveSlideWatchLaterMovies,
  setActiveSlideSearchedMovies,
  setPageNumberUpcomingMovies,
  setPageNumberSearchedMovies,
} = movieSlice.actions;
