// rootSaga.ts
import { all, fork } from 'redux-saga/effects';
import { watchFetchData } from './sagas';

export function* rootSaga() {
    yield all([fork(watchFetchData)]);
}
