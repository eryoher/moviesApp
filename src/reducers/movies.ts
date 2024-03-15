import { MoviesActions } from "../constants/";
import { IDeleteMovieResponse, IMovie } from "../models/movies";

export interface IReducerState {
  listMovies: Array<IMovie> | null;
  deletedMovie: IDeleteMovieResponse | null;
  newMovie: IMovie | null;
  updateMovie: IMovie | null;
}

const initialState: IReducerState = {
  listMovies: null,
  deletedMovie: null,
  newMovie: null,
  updateMovie: null,
};

function moviesReducer(state: IReducerState = initialState, action: any) {
  switch (action.type) {
    case MoviesActions.GET_MOVIE:
      return { ...state, listMovies: null };
    case MoviesActions.GET_MOVIE_SUCCESS:
      return { ...state, listMovies: action.payload };
    case MoviesActions.DELETE_MOVIE:
      return { ...state, deletedMovie: null };
    case MoviesActions.DELETE_MOVIE_SUCCESS:
      const movies = state?.listMovies ?? [];
      return {
        ...state,
        deletedMovie: action.payload,
        listMovies: movies.filter((m) => m.id !== action.payload.id),
      };

    case MoviesActions.CREATE_MOVIE:
      return { ...state, newMovie: null };
    case MoviesActions.CREATE_MOVIE_SUCCESS:
      const newMovie = action.payload;
      state.listMovies?.unshift(newMovie);
      return {
        ...state,
        listMovies: state.listMovies,
        newMovie: action.payload,
      };
    case MoviesActions.UPDATE_MOVIE:
      return { ...state, updateMovie: null };
    case MoviesActions.UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        updateMovie: action.payload,
      };

    default:
      return state;
  }
}

export default moviesReducer;
