//Core
import React from 'react';
//Styles
import { StyledNavList, StyledListItem, StyledItemLink } from './AuthMenu.styles';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const AuthMenu = () => {
	return (
		<StyledNavList>
			<StyledListItem>
				<StyledItemLink to="/register" title="Sign Up">
					<FaUserPlus />
				</StyledItemLink>
			</StyledListItem>

			<StyledListItem>
				<StyledItemLink to="/login" title="Sign In">
					<FaSignInAlt />
				</StyledItemLink>
			</StyledListItem>
		</StyledNavList>
	);
};

export default AuthMenu;
