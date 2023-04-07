import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getSearchApi } from "./getSearchApi";
import { fetchSearchError, fetchSearchPending, fetchSearchSuccess } from "./searchSlice";

function* fetchSearchedMoviesHandler({payload: {page, query}}) {
  try {
    yield delay(1000);
    // console.log(query);
    // console.log(`page: ${page}`)
    const searchForMovies = yield call(getSearchApi, page, query);
    // console.log(`query: ${query}`);
    yield put(fetchSearchSuccess(searchForMovies));
  }
  catch (error) {
    yield put(fetchSearchError())
  }
}

export function* searchedMoviesSaga() {
  yield takeLatest(fetchSearchPending.type, fetchSearchedMoviesHandler);
}