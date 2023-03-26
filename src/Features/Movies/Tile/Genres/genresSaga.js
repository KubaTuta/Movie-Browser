import { call, put, takeLatest } from "redux-saga/effects";
import { fetchGenresError, fetchGenresPending, fetchGenresSuccess } from "./genresSlice";
import { getApiGenres } from "./getApiGenres";

function* fetchGenresHandler() {
  try {
    const genres = yield call(getApiGenres);
    yield put(fetchGenresSuccess(genres));
  }
  catch (error) {
    yield put(fetchGenresError())
  }
}

export function* genresSaga() {

  yield takeLatest(fetchGenresPending.type, fetchGenresHandler);
}
