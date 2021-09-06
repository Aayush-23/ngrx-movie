import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MovieInterface } from '../models/movie.model';
import { MovieService } from '../movie.service';
import { search, searchFailure, searchSuccess } from './movie.action';

@Injectable()
export class MovieEffects {
  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(search),
      switchMap(({ query }) => {
        return this.movieService.getMovies(query, '1').pipe(
          map((movies: MovieInterface) => searchSuccess({ movies })),
          catchError((movies: MovieInterface) =>
            of(
              searchFailure({
                errorMsg: 'Something wrong, Please try after some time',
              })
            )
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private movieService: MovieService) {
    console.log(this.search$.subscribe((data) => data));
  }
}
