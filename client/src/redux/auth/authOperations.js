//Database
import firebase from 'firebase';
//Redux
import { authSlice } from './authReducers';
import { errorSlice } from '../error/errorReducers';
import { loaderSlice } from '../loader/loaderReducers';

const { authSignOut, updateProfile, setUserProfile } = authSlice.actions;
const { setLoading, unsetLoading } = loaderSlice.actions;
const { setError } = errorSlice.actions;

const authSignUpUser = ({ fullName, email, password }) => async dispatch => {
	dispatch(setLoading());

	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);

		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: fullName });

		const { uid, displayName } = await firebase.auth().currentUser;

		dispatch(setUserProfile({ uid, displayName }));
	} catch (error) {
		dispatch(setError(error));
	} finally {
		dispatch(unsetLoading());
	}
};

const authSignInUser = ({ email, password }) => async dispatch => {
	dispatch(setLoading());

	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(updateProfile({ uid, displayName, photoURL }));
	} catch (error) {
		dispatch(setError(error));
	} finally {
		dispatch(unsetLoading());
	}
};

const authSignOutUser = () => async dispatch => {
	dispatch(setLoading());

	try {
		await firebase
			.auth()
			.signOut()
			.then(() => dispatch(authSignOut()));
	} catch (error) {
		dispatch(setError(error));
	} finally {
		dispatch(unsetLoading());
	}
};

const authStateChangeUser = () => async dispatch => {
	dispatch(setLoading());

	try {
		await firebase.auth().onAuthStateChanged(currentUser => {
			if (currentUser) {
				const { uid, displayName, photoURL } = currentUser;

				dispatch(updateProfile({ uid, displayName, photoURL }));
			}
		});
	} catch (error) {
		dispatch(setError(error));
	} finally {
		dispatch(unsetLoading());
	}
};

const updateUserProfile = ({ fullName, photoURL: photo }) => async dispatch => {
	dispatch(setLoading());
	try {
		const user = await firebase.auth().currentUser;
		await user.updateProfile({ displayName: fullName, photoURL: photo });

		const { uid, displayName, photoURL } = await firebase.auth().currentUser;

		dispatch(updateProfile({ uid, displayName, photoURL }));
	} catch (error) {
		dispatch(setError(error));
	} finally {
		dispatch(unsetLoading());
	}
};

export { authSignUpUser, authSignInUser, authSignOutUser, authStateChangeUser, updateUserProfile };
