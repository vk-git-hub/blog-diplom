import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authSlide from './slices/authSlice';
import postsSlide from './slices/postsSlice';
import { rootSaga } from './saga';


let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const combinedReducer = combineReducers({
  auth: authSlide,
  posts: postsSlide,
});

const rootReducer = (state: any, action: any) => {
  //if (action.type === removeUserDataAction) {
  //  state = undefined;
  //}
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
    thunk: true,    
  }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',  
});

// Infer the `AppRootStateType` and `AppDispatch` types from the store itself
export type AppRootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);








