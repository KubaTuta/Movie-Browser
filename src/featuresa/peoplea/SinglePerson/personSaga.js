import { call, put, takeLatest } from "redux-saga/effects";
import { getCastCrewApi, getPersonApi } from "./getPersonApi";
import { fetchPersonSuccess, fetchPersonPending, fetchPersonError, fetchCastCrewSuccess } from "./personSlice";


function* fetchPersonHandler({ payload: id }) {
    try {
        const profileId = yield call(getPersonApi, id);
        const castCrew = yield call(getCastCrewApi, id);
        yield put(fetchCastCrewSuccess(castCrew))
        yield put(fetchPersonSuccess(profileId));
    }
    catch (error) {
        yield put(fetchPersonError())
    }
}
export function* personSaga() {

    yield takeLatest(fetchPersonPending.type, fetchPersonHandler)

};