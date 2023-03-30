import { all } from "redux-saga/effects";
import { genresSaga } from "./common/MovieTile/Genres/genresSaga";
import { popularMoviesSaga } from "./Features/Movies/PopularMovies/popularMoviesSaga";
import { popularPeopleSaga } from "./Features/People/PopularPeople/popularPeopleSaga"
export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    popularPeopleSaga(),
    genresSaga(),
  ]);
}  