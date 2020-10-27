//Core
import React, { useState } from 'react';
//Components
import { Login } from 'components/Auth';
//Redux
import { useDispatch } from 'react-redux';
import { authSignInUser } from 'redux/auth/authOperations';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
		<div>
			<Login
				email={email}
				password={password}
				onSubmit={handleSubmit}
				onChangeEmail={handleChangeEmail}
				onChangePassword={handleChangePassword}
			/>
		</div>
	);
};

export default LoginPage;
