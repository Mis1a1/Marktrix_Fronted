export const ALL_PREDICTIONS_GET = 'ALL_PREDICTIONS_GET';
export const ALL_PREDICTIONS_GET_SUCCESS = 'ALL_PREDICTIONS_GET_SUCCESS';
export const ALL_PREDICTIONS_GET_ERRORR = 'ALL_PREDICTIONS_GET_ERRORR';

export function request() {
    return {
        type: ALL_PREDICTIONS_GET,
    }
}

export function requestSuccess(payload: any) {
    return {
        type: ALL_PREDICTIONS_GET_SUCCESS,
        payload,
    }
}

export function requestError(payload: any) {
    return {
        type: ALL_PREDICTIONS_GET_ERRORR,
        payload
    }
}
