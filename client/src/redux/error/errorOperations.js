//Redux
import { errorSlice } from './errorReducers';

const { unsetError } = errorSlice.actions;

export const unsetErrorMessage = () => dispatch => dispatch(unsetError());
