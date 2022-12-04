import { combineReducers } from 'redux'
import getAllPredictions from './api/getAllPredictions/getAllPredictionsReducer';
import getNamePredictions from './api/getNamePredictions/namePredictionsReducers';


const root = combineReducers({
    getAllPredictions,
    getNamePredictions
});

export default function reducers(state: any, action: any) {
    return root(state, action);
}