//Core
import React, { useState } from 'react';
//Components
import { Register } from 'components/Auth';
//Redux
import { useDispatch } from 'react-redux';
import { authSignUpUser } from 'redux/auth/authOperations';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [fullName, setFullName] = useState('');
	const [password, setPassword] = useState('');

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
		<div>
			<Register
				email={email}
				fullName={fullName}
				password={password}
				onSubmit={handleSubmit}
				onChangeName={handleChangeName}
				onChangeEmail={handleChangeEmail}
				onChangePassword={handleChangePassword}
			/>
		</div>
	);
};

export default RegisterPage;
