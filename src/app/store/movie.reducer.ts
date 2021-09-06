import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { State, MovieInterface } from '../models/movie.model';
import { search, searchFailure, searchSuccess } from './movie.action';

const movieObj: MovieInterface = {
  moviesArray: [],
  length: '0',
  error: '',
};
const initialState: State = {
  movie: movieObj,
  errorMsg: '',
  isLoading: false,
};

export const reducer = createReducer(
  initialState,
  on(search, (state, { query }) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(searchSuccess, (state, { movies }) => {
    return {
      ...state,
      movie: movies,
      isLoading: false,
      errorMsg: movies.error,
    };
  }),
  on(searchFailure, (state, action) => {
    return {
      ...state,
      movie: movieObj,
      isLoading: false,
      errorMsg: action.errorMsg,
    };
  })
);
