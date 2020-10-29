//Core
import React from 'react';
//Styles
import { StyledAvatarWrap, StyledAvatarImg, StyledNavLink } from './UserProfile.styles';

//remove it after receive uid from redux
const uid = 'qwe123';

const UserProfile = () => (
	<StyledAvatarWrap>
		<StyledNavLink to={`/users/${uid}`}>
			<StyledAvatarImg src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
		</StyledNavLink>
	</StyledAvatarWrap>
);

export default UserProfile;
