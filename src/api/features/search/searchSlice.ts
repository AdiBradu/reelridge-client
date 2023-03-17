import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// types
import { UpcomingProps } from '../../../types/types';

interface InitialState {
  searchQuery: string;
  searchedMovies: UpcomingProps[];
}

const initialState: InitialState = {
  searchQuery: '',
  searchedMovies: [],
};

const seaarchedMoviesSlice = createSlice({
  name: 'searchedMovies',
  initialState,
  reducers: {
    setSearchedMovies: (state, action: PayloadAction<UpcomingProps[]>) => {
      state.searchedMovies = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {},
});

export default seaarchedMoviesSlice.reducer;
export const { setSearchedMovies, setSearchQuery } = seaarchedMoviesSlice.actions;
