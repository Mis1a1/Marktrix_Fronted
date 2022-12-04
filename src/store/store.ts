import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import dataReducer from "../data/dataSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

let sagaMiddleware = createSagaMiddleware()
export let store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
