//Core
import React from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { authSignOutUser } from 'redux/auth/authOperations';
//Styles
import { StyledNavLink, StyledNavList, StyledListItem } from './UserMenu.styles';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';

const UserMenu = () => {
	const dispatch = useDispatch();

	const onSignOutUser = () => dispatch(authSignOutUser());

	return (
		<StyledNavList>
			<StyledListItem>
				<StyledNavLink to="/settings" title="Settings">
					<FaCog />
				</StyledNavLink>
			</StyledListItem>

			<StyledListItem>
				<StyledNavLink exact to="/" onClick={onSignOutUser} title="Sing Out">
					<FaSignOutAlt />
				</StyledNavLink>
			</StyledListItem>
		</StyledNavList>
	);
};

export default UserMenu;
