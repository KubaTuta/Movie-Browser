import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "./Features/Movies/popularMoviesSaga";

export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
  ]);
}  