import { call, put, takeLatest } from "redux-saga/effects";
import { getCastCrewApi, getProfileApi } from "./getProfileApi";
import { fetchProfileSuccess, fetchPending, fetchError, fetchCastCrewSuccess } from "./profileSlice";


function* fetchprofileHendler({ payload: id }) {
    try {
        const profileId = yield call(getProfileApi, id);
        const castCrew = yield call(getCastCrewApi, id);
        yield put(fetchCastCrewSuccess(castCrew))
        yield put(fetchProfileSuccess(profileId));
        console.log(castCrew)
    }
    catch (error) {
        yield put(fetchError(alert(" coś poszło nie tak")))
    }
}
export function* profileIdSaga() {

    yield takeLatest(fetchPending.type, fetchprofileHendler)

};