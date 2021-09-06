import { createAction, props } from '@ngrx/store';
import { MovieInterface } from '../models/movie.model';

export const search = createAction(
  '[Movie/API] Search is needed',
  props<{ query: string }>()
);

export const searchSuccess = createAction(
  '[Movie/API] Search Success',
  props<{ movies: MovieInterface }>()
);

export const searchFailure = createAction(
  '[Movie/API] Search Failure',
  props<{ errorMsg: string }>()
);
