import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie, MovieInterface, State } from './models/movie.model';
import { search } from './store/movie.action';
import { getErrorMsg, getLoading, getMovies } from './store/movie.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  errorMsg$!: Observable<string>;
  isLoading$!: Observable<boolean>;
  name: string = '';
  movieResults$!: Observable<Movie[]>;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    // this.store.select('movieReducerFn').subscribe((data) => {
    //   this.isLoading = data.isLoading;
    //   this.errorMsg = data.errorMsg;
    //   this.movieResults = data.movie.moviesArray;
    //   console.log(this.isLoading);
    // });
    //   this.movieResults$ = this.store.select('movieReducerFn');
    //   console.log(this.movieResults$);

    this.movieResults$ = this.store.select(getMovies);
    this.errorMsg$ = this.store.select(getErrorMsg);
    this.isLoading$ = this.store.select(getLoading);
  }
  onSearch() {
    this.store.dispatch(search({ query: this.name }));
  }
}
