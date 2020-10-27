//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	userId: null,
	fullName: null,
	stateChange: false,
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',

	initialState: state,

	reducers: {
		updateUserProfile: (state, { payload }) => ({
			...state,
			userId: payload.userId,
			fullName: payload.fullName,
		}),

		authStateChange: (state, { payload }) => ({
			...state,
			stateChange: payload.stateChange,
		}),

		authSignOut: () => state,

		setAuthError: (state, { payload }) => ({
			...state,
			error: payload,
		}),
	},
});
