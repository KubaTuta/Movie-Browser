import { call, debounce, put } from "redux-saga/effects";
import { getSearchApi } from "./getSearchApi";
import { fetchSearchError, fetchSearchPending, fetchSearchSuccess } from "./searchSlice";

function* fetchSearchedMoviesHandler({payload: {page, query}}) {
  try {
    const searchForMovies = yield call(getSearchApi, page, query);
    yield put(fetchSearchSuccess(searchForMovies));
  }
  catch (error) {
    yield put(fetchSearchError())
  }
}

export function* searchedMoviesSaga() {
  yield debounce(1000, fetchSearchPending.type, fetchSearchedMoviesHandler);
}