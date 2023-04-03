import { call, put, takeLatest, select } from "redux-saga/effects";
import { getMovie } from "./getApi";
import { fetchMovieSuccess, fetchMovieError, fetchMoviePending, selectId } from "./movieSlice";

function* fetchMovieHandler() {
  try {
    const id = yield select(selectId);
    const movie = yield call(getMovie, id);
    yield put(fetchMovieSuccess(movie));

  }
  catch (error) {
    yield put(fetchMovieError())
  }
}

export function* movieSaga() {

  yield takeLatest(fetchMoviePending.type, fetchMovieHandler);
}
