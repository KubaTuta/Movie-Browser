import {call, debounce, put} from "redux-saga/effects";
import {getSearchMoviesApi, getSearchPeopleApi} from "./getSearchApi";
import {fetchSearchError, fetchSearchPending, fetchSearchSuccess} from "./searchMoviesSlice";
import {fetchSearchPeopleError, fetchSearchPeoplePending, fetchSearchPeopleSuccess} from "./searchPeopleSlice";

function* fetchSearchedMoviesHandler({payload: {page, query}}) {
  try {
    const searchForMovies = yield call(getSearchMoviesApi, page, query);
    yield put(fetchSearchSuccess(searchForMovies));
  }
  catch (error) {
    yield put(fetchSearchError())
  }
}

export function* searchedMoviesSaga() {
  yield debounce(1000, fetchSearchPending.type, fetchSearchedMoviesHandler);
}

function* fetchSearchedPeopleHandler({payload: {page, query}}) {
  try {
    const searchForPeople = yield call(getSearchPeopleApi, page, query);
    yield put(fetchSearchPeopleSuccess(searchForPeople));
  } catch (error) {
    yield put(fetchSearchPeopleError())
  }
}

export function* searchedPeopleSaga() {
  yield debounce(1000, fetchSearchPeoplePending.type, fetchSearchedPeopleHandler);
}