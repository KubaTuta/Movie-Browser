import { call, put, takeLatest } from "redux-saga/effects";
import { getApi } from "./getApi";
import { fetchMoviesSuccess, fetchMoviesError, fetchMoviesPending } from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({payload: {page}}) {
  try {
    const popularMovies = yield call(getApi, page);
    yield put(fetchMoviesSuccess(popularMovies));
  }
  catch (error) {
    yield put(fetchMoviesError())
  }
}

export function* popularMoviesSaga() {

  yield takeLatest(fetchMoviesPending.type, fetchPopularMoviesHandler);
}
