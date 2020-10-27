//Core
import { configureStore, combineReducers } from '@reduxjs/toolkit';
//Redux
import { authSlice } from './auth/authReducers';

const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
