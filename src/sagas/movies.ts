import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { MoviesActions } from "../constants";
import {
  ICreateMovieAction,
  ICreateMovieResponse,
  IDeleteMovieAction,
  IDeleteMovieResponse,
  IGetMoviesResponse,
  IUpdateMovieAction,
  IUpdateMovieResponse,
} from "../models/movies";
import {
  createMovieApi,
  deleteMovieApi,
  getMoviesApi,
  updateMovieApi,
} from "../apis/movies";
import {
  createMovieSuccess,
  deleteMovieSuccess,
  getMoviesSuccess,
  updateMovieSuccess,
} from "../actions/movies";

function* getMoviesRequest() {
  try {
    const movies: IGetMoviesResponse = yield call(getMoviesApi);
    yield put(getMoviesSuccess(movies));
  } catch (error: any) {}
}

function* deleteMovieRequest({ payload }: IDeleteMovieAction) {
  try {
    const movies: IDeleteMovieResponse = yield call(deleteMovieApi, payload);
    yield put(deleteMovieSuccess(movies));
  } catch (error: any) {}
}

function* createMovieRequest({ payload }: ICreateMovieAction): any {
  try {
    const response: ICreateMovieResponse = yield call(createMovieApi, payload);
    yield put(createMovieSuccess(response));
  } catch (error: any) {}
}

function* updateMovieRequest({ payload }: IUpdateMovieAction): any {
  try {
    const response: IUpdateMovieResponse = yield call(updateMovieApi, payload);
    yield put(updateMovieSuccess(response));
  } catch (error: any) {}
}

export function* getMoviesSaga() {
  yield takeEvery(MoviesActions.GET_MOVIES, getMoviesRequest);
}

export function* createMovieSaga() {
  yield takeEvery(MoviesActions.CREATE_MOVIE, createMovieRequest);
}

export function* deleteMovieSaga() {
  yield takeEvery(MoviesActions.DELETE_MOVIE, deleteMovieRequest);
}

export function* updateMovieSaga() {
  yield takeEvery(MoviesActions.UPDATE_MOVIE, updateMovieRequest);
}

export default function* rootSaga() {
  yield all([
    fork(getMoviesSaga),
    fork(deleteMovieSaga),
    fork(createMovieSaga),
    fork(updateMovieSaga),
  ]);
}
