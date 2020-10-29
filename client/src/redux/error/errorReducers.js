//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	error: null,
};

export const errorSlice = createSlice({
	name: 'error',

	initialState: state,

	reducers: {
		setError: (state, { payload }) => ({
			error: payload,
		}),

		unsetError: () => state,
	},
});
