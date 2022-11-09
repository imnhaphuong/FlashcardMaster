import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
//redux-logger
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const middleware =[thunk]
export const store = configureStore(
    {reducer:reducers},
    applyMiddleware(...middleware)
)