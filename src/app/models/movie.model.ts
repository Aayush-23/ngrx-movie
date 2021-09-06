export interface Movie {
  Title: string;
  Year: string;
  ibdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieInterface {
  moviesArray: Movie[];
  length: string;
  error: string;
}

export interface State {
  errorMsg: string;
  isLoading: boolean;
  movie: MovieInterface;
}
