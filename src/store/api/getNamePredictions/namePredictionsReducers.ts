import * as actions from './namePredictionsActions';

export type State = {
    loaded: boolean;
    loading: boolean;
    error: object | null;
    data: object | null;
}

const initialState: State = {
    loaded: false,
    loading: false,
    error: null,
    data: null,
}

export default function reducer(state: State = initialState, action: any) {
    switch (action.type) {
        case actions.NAME_PREDICTION_GET:
            return {
                ...state,
                loaded: false,
                loading: true,
                error: null,
                data: null,
            }
        case actions.NAME_PREDICTION_GET_ERROR:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload,
                data: null,
            }
        case actions.NAME_PREDICTION_GET_SUCCESS:
            return {
                ...state,
                loaded: false,
                loading: true,
                error: null,
                data: action.payload.data,
            }
        default:
            return state;
    }
}
