//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	loading: false,
};

export const loaderSlice = createSlice({
	name: 'loader',

	initialState: state,

	reducers: {
		setLoading: () => ({ loading: true }),

		unsetLoading: () => ({ loading: false }),
	},
});
