import { MoviesActions } from "../constants/ActionsTypes";

export interface IMovie {
  id: string;
  title: string;
  year: number;
  director: string;
  duration: number;
  poster: string;
  genre: string[];
  rate: number;
}
export interface IBaseParams {
  id: string;
}

export interface IGetMoviesAction {
  type: MoviesActions.GET_MOVIES;
}

export interface IGetMoviesResponse {
  movies: IMovie;
}

export interface IGetMoviesActionSuccess {
  type: MoviesActions.GET_MOVIE_SUCCESS;
  payload: IGetMoviesResponse;
}

export interface IDeleteMovieParams extends IBaseParams {}
export interface IDeleteMovieResponse {}

export interface IDeleteMovieAction {
  type: MoviesActions.DELETE_MOVIE;
  payload: IDeleteMovieParams;
}

export interface IDeleteMovieActionSuccess {
  type: MoviesActions.DELETE_MOVIE_SUCCESS;
  payload: IDeleteMovieResponse;
}

export interface ICreateMovieParams extends IMovie {}
export interface ICreateMovieResponse {}

export interface ICreateMovieAction {
  type: MoviesActions.CREATE_MOVIE;
  payload: ICreateMovieParams;
}

export interface ICreateMovieActionSuccess {
  type: MoviesActions.CREATE_MOVIE_SUCCESS;
  payload: ICreateMovieResponse;
}

export interface IUpdateMovieParams extends Partial<IMovie> {}
export interface IUpdateMovieResponse {}

export interface IUpdateMovieAction {
  type: MoviesActions.UPDATE_MOVIE;
  payload: IUpdateMovieParams;
}

export interface IUpdateMovieActionSuccess {
  type: MoviesActions.UPDATE_MOVIE_SUCCESS;
  payload: IUpdateMovieResponse;
}
