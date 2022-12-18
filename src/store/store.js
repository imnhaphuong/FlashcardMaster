import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
//redux-logger
import thunk from 'redux-thunk';
import userReducer from './slices/userSlice';
import questReducer from './slices/questSlice';
const middleware = [thunk]
export const storeRoot = configureStore({
  reducer: {
    user: userReducer,
    questReducer: questReducer,
  }
},
  applyMiddleware(...middleware)
)


