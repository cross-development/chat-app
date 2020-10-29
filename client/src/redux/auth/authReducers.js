//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	uid: null,
	displayName: '',
	photoURL: null,
};

export const authSlice = createSlice({
	name: 'auth',

	initialState: state,

	reducers: {
		setUserProfile: (state, { payload }) => ({
			...state,
			uid: payload.uid,
			displayName: payload.displayName,
		}),

		updateProfile: (state, { payload }) => ({
			...state,
			uid: payload.uid,
			photoURL: payload.photoURL,
			displayName: payload.displayName,
		}),

		authSignOut: () => state,
	},
});
