import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "./Features/Movies/popularMoviesSaga";
import { popularPeopleSaga } from "./Features/People/popularPeopleSaga"
export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    popularPeopleSaga(),
  ]);
}  