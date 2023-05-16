import { call, put, takeLatest, select } from "redux-saga/effects";
import { getCredits, getMovie } from "./getApi";
import { fetchSingleMovieSuccess, fetchSingleMovieError, fetchSingleMoviePending, selectId, fetchCreditsSuccess } from "./movieSlice";

function* fetchSingleMovieHandler() {
  try {
    const id = yield select(selectId);
    const movie = yield call(getMovie, id);
    const credits = yield call(getCredits, id);
    yield put(fetchSingleMovieSuccess(movie));
    yield put(fetchCreditsSuccess(credits));

  }
  catch (error) {
    yield put(fetchSingleMovieError())
  }
}


export function* movieSaga() {

  yield takeLatest(fetchSingleMoviePending.type, fetchSingleMovieHandler);


}
