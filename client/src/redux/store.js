//Core
import { configureStore, combineReducers } from '@reduxjs/toolkit';
//Redux
import { authSlice } from './auth/authReducers';
import { errorSlice } from './error/errorReducers';
import { loaderSlice } from './loader/loaderReducers';

const rootReducer = combineReducers({
	[authSlice.name]: authSlice.reducer,
	[errorSlice.name]: errorSlice.reducer,
	[loaderSlice.name]: loaderSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
