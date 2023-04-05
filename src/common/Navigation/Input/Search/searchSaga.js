import { call, put, takeLatest } from "redux-saga/effects";
import { getSearchApi } from "./getSearchApi";
import { fetchSearchError, fetchSearchPending, fetchSearchSuccess } from "./searchSlice";

function* fetchSearchedMoviesHandler({payload: query}) {
  try {
    const searchForMovies = yield call(getSearchApi, query);
    yield put(fetchSearchSuccess(searchForMovies));
  }
  catch (error) {
    yield put(fetchSearchError())
  }
}

export function* searchedMoviesSaga() {
  yield takeLatest(fetchSearchPending.type, fetchSearchedMoviesHandler);
}
