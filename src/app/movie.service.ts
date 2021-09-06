import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  getMovies(query: string, page: string) {
    // const response= await fetch(
    //   `http://www.omdbapi.com/?apikey=5b2dda59&s=${query}&page=1`
    // );
    // const data = await response.json();
    // console.log(data);
    return this.http
      .get<any>(
        `http://www.omdbapi.com/?apikey=5b2dda59&s=${query}&page=${page}`
      )
      .pipe(
        map((response) => {
          console.log(response);
          return {
            moviesArray: response.Search,
            length: response.totalResults,
            error: response.Error,
          };
        })
      );
    // .subscribe((data) => {
    //   console.log(data);
    // });
  }
}
