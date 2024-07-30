// sagas.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import { Data } from '../../types/types';
import { fetchDataFailure, fetchDataSuccess, fetchDataRequest } from '../slices/slice';
import { GETTESTIMONIALS } from '../api/Api';

// Define the type for the saga generator function
function* fetchDataSaga(): Generator<any, void, { data: Array<Data> }> {
    try {
        const response = yield call(GETTESTIMONIALS);
        const data: Array<Data> = response.data;
        yield put(fetchDataSuccess(data));
    } catch (error: any) {
        yield put(fetchDataFailure(error.message));
    }
}

export function* watchFetchData() {
    yield takeEvery(fetchDataRequest.type, fetchDataSaga);
}