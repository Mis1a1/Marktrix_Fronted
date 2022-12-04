import * as actions from './getAllPredictionsActions';

export type State = {
    loaded: boolean;
    loading: boolean;
    error: object | null;
    data: Array<{}>;
}

const initialState: State = {
    loaded: false,
    loading: false,
    error: null,
    data: [],
}

export default function getAllPredictions(state: State = initialState, action: any) {
        switch (action.type) {
        case actions.ALL_PREDICTIONS_GET:
            return {
                ...state,
                loaded: false,
                loading: true,
                error: null,
                data: null,
            }
        case actions.ALL_PREDICTIONS_GET_ERRORR:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload,
                data: null,
            }
        case actions.ALL_PREDICTIONS_GET_SUCCESS:
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
