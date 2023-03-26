import { all } from "redux-saga/effects";
import { genresSaga } from "./Features/genresSaga";
import { popularMoviesSaga } from "./Features/Movies/popularMoviesSaga";
import { popularPeopleSaga } from "./Features/People/popularPeopleSaga"
export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    popularPeopleSaga(),
    genresSaga(),
  ]);
}  