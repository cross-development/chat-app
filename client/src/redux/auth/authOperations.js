//Redux
import { authSlice } from './authReducers';
//Database
import firebase from 'firebase';

export const authSignUpUser = ({ email, password, fullName }) => async dispatch => {
	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);

		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: fullName });

		const { uid, displayName } = await firebase.auth().currentUser;

		dispatch(
			authSlice.actions.updateUserProfile({
				userId: uid,
				fullName: displayName,
			}),
		);
	} catch (error) {
		dispatch(authSlice.actions.setAuthError(error));

		console.log('error', error);
		console.log('error.message', error.message);
	}
};

export const authSignInUser = ({ email, password }) => async dispatch => {
	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
	} catch (error) {
		dispatch(authSlice.actions.setAuthError(error));

		console.log('error', error);
		console.log('error.message', error.message);
	}
};

export const authSignOutUser = () => async dispatch => {
	try {
		await firebase.auth().signOut();

		dispatch(authSlice.actions.authSignOut());
	} catch (error) {
		dispatch(authSlice.actions.setAuthError(error));

		console.log('error', error);
		console.log('error.message', error.message);
	}
};

export const authStateChangeUser = () => async dispatch => {
	try {
		await firebase.auth().onAuthStateChanged(user => {
			if (user) {
				dispatch(
					authSlice.actions.updateUserProfile({
						userId: user.uid,
						fullName: user.displayName,
					}),
				);

				dispatch(authSlice.actions.authStateChange({ stateChange: true }));
			}
		});
	} catch (error) {
		dispatch(authSlice.actions.setAuthError(error));

		console.log('error', error);
		console.log('error.message', error.message);
	}
};
