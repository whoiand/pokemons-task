import rootReducer from './reducers';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
});

type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;

export {store, useAppDispatch};
