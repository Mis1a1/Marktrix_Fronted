import { fork, all } from 'redux-saga/effects';
import getAllPredictions from './api/getAllPredictions/getAllPredictionsSaga';
import getNamePredictions from './api/getNamePredictions/namePredictionsSagas';

export default function* rootSaga() {
    yield all([
        fork(getAllPredictions),
        fork(getNamePredictions),
    ])
}
