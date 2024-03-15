import { MoviesActions } from "../constants";
import {
  ICreateMovieActionSuccess,
  ICreateMovieParams,
  ICreateMovieResponse,
  IDeleteMovieAction,
  IDeleteMovieActionSuccess,
  IDeleteMovieParams,
  IDeleteMovieResponse,
  IGetMoviesActionSuccess,
  IGetMoviesResponse,
  IUpdateMovieActionSuccess,
  IUpdateMovieParams,
  IUpdateMovieResponse,
} from "../models/movies";

export const getMovies = () => ({
  type: MoviesActions.GET_MOVIES,
});

export const getMoviesSuccess = (
  payload: IGetMoviesResponse
): IGetMoviesActionSuccess => ({
  type: MoviesActions.GET_MOVIES_SUCCESS,
  payload,
});

export const deleteMovie = (payload: IDeleteMovieParams) => ({
  type: MoviesActions.DELETE_MOVIE,
  payload,
});

export const deleteMovieSuccess = (
  payload: IDeleteMovieResponse
): IDeleteMovieActionSuccess => ({
  type: MoviesActions.DELETE_MOVIE_SUCCESS,
  payload,
});

export const createMovie = (payload: ICreateMovieParams) => ({
  type: MoviesActions.CREATE_MOVIE,
  payload,
});

export const createMovieSuccess = (
  payload: ICreateMovieResponse
): ICreateMovieActionSuccess => ({
  type: MoviesActions.CREATE_MOVIE_SUCCESS,
  payload,
});

export const updateMovie = (payload: IUpdateMovieParams) => ({
  type: MoviesActions.UPDATE_MOVIE,
  payload,
});

export const updateMovieSuccess = (
  payload: IUpdateMovieResponse
): IUpdateMovieActionSuccess => ({
  type: MoviesActions.UPDATE_MOVIE_SUCCESS,
  payload,
});
