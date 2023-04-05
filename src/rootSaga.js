import { all } from "redux-saga/effects";
import { genresSaga } from "./common/Genres/genresSaga";
import { popularMoviesSaga } from "./Features/Movies/PopularMovies/popularMoviesSaga";
import { popularPeopleSaga } from "./Features/People/PopularPeople/popularPeopleSaga";
import { movieSaga } from "./Features/Movies/SingleMovie/movieSaga";
import { searchedMoviesSaga } from "./common/Navigation/Input/Search/searchSaga";
export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    popularPeopleSaga(),
    genresSaga(),
    movieSaga(),
    searchedMoviesSaga(),
  ]);
}  