//Core
import React, { useState } from 'react';
//Components
import { Login } from 'components/Auth';
import Notification from 'components/Notification';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { authSignInUser } from 'redux/auth/authOperations';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { error } = useSelector(state => state.error);
	const dispatch = useDispatch();

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(authSignInUser({ email, password }));

		setPassword('');
		setEmail('');
	};

	return (
		<>
			<Login
				email={email}
				password={password}
				onSubmit={handleSubmit}
				onChangeEmail={handleChangeEmail}
				onChangePassword={handleChangePassword}
			/>

			{error && <Notification message={error.message} />}
		</>
	);
};

export default LoginPage;
