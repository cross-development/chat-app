//Core
import React, { useState } from 'react';
//Components
import { Register } from 'components/Auth';
import Notification from 'components/Notification';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { authSignUpUser } from 'redux/auth/authOperations';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [password, setPassword] = useState('');

	const { error } = useSelector(state => state.error);
	const dispatch = useDispatch();

	const handleChangeEmail = ({ target: { value } }) => setEmail(value);
	const handleChangeName = ({ target: { value } }) => setFullName(value);
	const handleChangePassword = ({ target: { value } }) => setPassword(value);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(authSignUpUser({ email, password, fullName }));

		setFullName('');
		setPassword('');
		setEmail('');
	};

	return (
		<>
			<Register
				email={email}
				fullName={fullName}
				password={password}
				onSubmit={handleSubmit}
				onChangeName={handleChangeName}
				onChangeEmail={handleChangeEmail}
				onChangePassword={handleChangePassword}
			/>

			{error && <Notification message={error.message} />}
		</>
	);
};

export default RegisterPage;
