import { call, put, takeLatest, select } from "redux-saga/effects";
import { getCredits, getMovie } from "./getApi";
import { fetchMovieSuccess, fetchError, fetchPending, selectId, fetchCreditsSuccess } from "./movieSlice";

function* fetchMovieHandler() {
  try {
    const id = yield select(selectId);
    const movie = yield call(getMovie, id);
    const credits = yield call(getCredits, id);
    yield put(fetchMovieSuccess(movie));
    yield put(fetchCreditsSuccess(credits));

  }
  catch (error) {
    yield put(fetchError())
  }
}


export function* movieSaga() {

  yield takeLatest(fetchPending.type, fetchMovieHandler);


}
