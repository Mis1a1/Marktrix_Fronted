import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'redux';
import * as actions from './getAllPredictionsActions';
import { api } from '../../../util/api';

function* handler(action: Action): any {
    try {
        let response = yield api.get('/predict');
        const actres = actions.requestSuccess(response);
        yield put(actres);
    } catch (error) {
        yield put(actions.requestError(error));
    }
}

export default function* saga() {
    yield takeEvery(
        actions.ALL_PREDICTIONS_GET,
        handler
    );
}