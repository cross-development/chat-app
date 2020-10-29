//Core
import React from 'react';
//Styles
import { StyledNavLink, StyledNavList, StyledListItem } from './Navigation.styles';
import { FaCommentDots, FaAddressBook, FaHeart } from 'react-icons/fa';

const Navigation = () => (
	<StyledNavList>
		<StyledListItem>
			<StyledNavLink to="/messages" title="Messages">
				<FaCommentDots />
			</StyledNavLink>
		</StyledListItem>

		<StyledListItem>
			<StyledNavLink to="/contacts" title="Contacts">
				<FaAddressBook />
			</StyledNavLink>
		</StyledListItem>

		<StyledListItem>
			<StyledNavLink to="/favorites" title="Favorites">
				<FaHeart />
			</StyledNavLink>
		</StyledListItem>
	</StyledNavList>
);

export default Navigation;
