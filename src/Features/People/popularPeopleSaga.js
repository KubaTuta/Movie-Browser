import { call, put, takeLatest } from "redux-saga/effects";
import { getApiPeople } from "./getApiPeople";
import { fetchPeopleSuccess, fetchPeopleError, fetchPeoplePending } from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({payload: page}) {
  try {
    const popularPeople = yield call(getApiPeople,page);
    yield put(fetchPeopleSuccess(popularPeople));
  }
  catch (error) {
    yield put(fetchPeopleError(alert("problem z pobieranie mdanych")))
  }
}

export function* popularPeopleSaga() {

  yield takeLatest(fetchPeoplePending.type, fetchPopularPeopleHandler);}