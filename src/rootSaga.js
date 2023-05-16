import { all } from "redux-saga/effects";
import { genresSaga } from "./common/Genres/genresSaga";
import { popularMoviesSaga } from "./featuresa/moviesa/PopularMovies/popularMoviesSaga";
import { popularPeopleSaga } from "./featuresa/peoplea/PopularPeople/popularPeopleSaga";
import { movieSaga } from "./featuresa/moviesa/SingleMovie/movieSaga";
import {searchedMoviesSaga, searchedPeopleSaga} from "./common/SearchBar/searchSaga";
import { personSaga } from "./featuresa/peoplea/SinglePerson/personSaga";

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