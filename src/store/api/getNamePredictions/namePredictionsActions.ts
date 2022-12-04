import type { Action } from 'redux';

export const NAME_PREDICTION_GET = 'NAME_PREDICTION_GET';
export const NAME_PREDICTION_GET_SUCCESS = 'NAME_PREDICTION_GET_SUCCESS';
export const NAME_PREDICTION_GET_ERROR = 'NAME_PREDICTION_GET_ERROR';

export interface NamePredictionAction extends Action {
        payload: {
            name: string
        };
}

export function request(payload: any) {
    return {
        type: NAME_PREDICTION_GET,
        payload
    }
}

export function requestSuccess(payload: any) {
    return {
        type: NAME_PREDICTION_GET_SUCCESS,
        payload
    }
}

export function requestError(payload: any) {
    return {
        type: NAME_PREDICTION_GET_ERROR,
        payload
    }
}
