import { all } from "redux-saga/effects";
import MoviesSaga from "./movies";

export default function* rootSaga() {
  yield all([MoviesSaga()]);
}
