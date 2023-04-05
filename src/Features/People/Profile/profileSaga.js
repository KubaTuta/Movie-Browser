import { call, put, takeLatest } from "redux-saga/effects";
import { getCastCrewApi, getProfileApi } from "./getProfileApi";
import { fetchProfileSucces, fetchProfilePending, fetchProfileError } from "./profileSlice";
import { fetchCastCrewError, fetchCastCrewPending, fetchCastCrewSucces } from "./castCrewSlice";

function* fetchprofileHendler({ payload: id }) {
    try {
        const profileId = yield call(getProfileApi, id);
        yield put(fetchProfileSucces(profileId));
    }
    catch (error) {
        yield put(fetchProfileError(alert(" coś poszło nie tak")))
    }
}
function* fetchCastCrewHendler({ payload: id }) {
    try {
        const castCrew = yield call(getCastCrewApi, id);
        yield put(fetchCastCrewSucces(castCrew));
    }
    catch (error) {
        yield put(fetchCastCrewError(alert("Coś sie zpier....")))
    }
}

export function* profileIdSaga() {

    yield takeLatest(fetchProfilePending.type, fetchprofileHendler)
    yield takeLatest(fetchCastCrewPending.type, fetchCastCrewHendler)
};