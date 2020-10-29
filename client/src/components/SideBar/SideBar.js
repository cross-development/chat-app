//Core
import React from 'react';
//Components
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import UserProfile from './UserProfile';
//Redux
import { useSelector } from 'react-redux';
//Styles
import styled from 'styled-components';

const SideBar = () => {
	const { uid } = useSelector(state => state.auth);
	const { loading: isLoading } = useSelector(state => state.loader);

	return (
		<StyledAside>
			{uid ? (
				!isLoading && (
					<>
						<UserProfile />
						<Navigation />
						<UserMenu />
					</>
				)
			) : (
				<AuthMenu />
			)}
		</StyledAside>
	);
};

const StyledAside = styled.aside`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 5%;
	background-color: #3498db;
	padding: 2rem 0;
	box-shadow: 0 0 8px 1px #3498db;
`;

export default SideBar;
