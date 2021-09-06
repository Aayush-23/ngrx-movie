import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../models/movie.model';
export const MOVIES_STATE_NAME = 'movieReducer';
const getMovieState = createFeatureSelector<State>(MOVIES_STATE_NAME);
export const getMovies = createSelector(getMovieState, (state) => {
  return state.movie.moviesArray;
});
export const getLoading = createSelector(getMovieState, (state) => {
  return state.isLoading;
});
export const getErrorMsg = createSelector(getMovieState, (state) => {
  return state.errorMsg;
});
