import { put, takeEvery } from 'redux-saga/effects';
import { NamePredictionAction as Action } from './namePredictionsActions';
import * as actions from './namePredictionsActions';
import { api } from '../../../util/api';

function* handler(action: Action): any {
    const name = action.payload;
    try {
        let response = yield api.get(`/predict/${name}`);
        yield put(actions.requestSuccess(response));
    } catch (error) {
        yield put(actions.requestError(error));
    }

}

export default function* saga() {
    yield takeEvery(
        actions.NAME_PREDICTION_GET,
        handler
    );
}