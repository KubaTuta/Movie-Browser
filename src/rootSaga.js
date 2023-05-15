import { all } from "redux-saga/effects";
import { genresSaga } from "./common/Genres/genresSaga";
import { popularMoviesSaga } from "./features/movies/PopularMovies/popularMoviesSaga";
import { popularPeopleSaga } from "./features/people/PopularPeople/popularPeopleSaga";
import { movieSaga } from "./features/movies/SingleMovie/movieSaga";
import {searchedMoviesSaga, searchedPeopleSaga} from "./common/SearchBar/searchSaga";
import { personSaga } from "./features/people/SinglePerson/personSaga";

export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    popularPeopleSaga(),
    genresSaga(),
    movieSaga(),
    searchedMoviesSaga(),
    searchedPeopleSaga(),
    personSaga(),
  ]);
}  