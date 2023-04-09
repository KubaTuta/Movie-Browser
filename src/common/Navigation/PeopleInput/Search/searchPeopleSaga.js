import { call, debounce, put } from "redux-saga/effects";
import { getSearchApi } from "./getSearchApi";
import { fetchSearchPeopleError, fetchSearchPeoplePending, fetchSearchPeopleSuccess } from "./searchPeopleSlice";

function* fetchSearchedPeopleHandler({payload: {page, query}}) {
  try {
    const searchForPeople = yield call(getSearchApi, page, query);
    yield put(fetchSearchPeopleSuccess(searchForPeople));
  }
  catch (error) {
    yield put(fetchSearchPeopleError())
  }
}

export function* searchedPeopleSaga() {
  yield debounce(1000, fetchSearchPeoplePending.type, fetchSearchedPeopleHandler);
}