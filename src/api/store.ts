import { configureStore } from '@reduxjs/toolkit';
import isLoggedInReducer from './features/auth/authSlice';
import movieSlideReducer from './features/movie/movieSlice';
import upcomingMoviesReducer from './features/upcomings/upcomingsSlice';
import WatchLaterMoviesReducer from './features/watchlater/watchLaterSlice';
import SearchedMoviesReducer from './features//search/searchSlice';

export const store = configureStore({
  reducer: {
    auth: isLoggedInReducer,
    movie: movieSlideReducer,
    upcoming: upcomingMoviesReducer,
    watchlater: WatchLaterMoviesReducer,
    search: SearchedMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
