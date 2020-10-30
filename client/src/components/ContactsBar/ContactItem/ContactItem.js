//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledTeamLI, StyledTeamLink } from './ContactItem.styles';
import { StyledNameSpan, StyledAvatarIMG, StyledStatusSpan } from './ContactItem.styles';

const ContactItem = ({ tmId, tmAvatar, tmName, isOnline }) => (
	<StyledTeamLI key={tmId}>
		<StyledTeamLink to={`/teammates/${tmId}`}>
			<StyledAvatarIMG src={`${process.env.PUBLIC_URL}/avatars/${tmAvatar}.png`} alt={tmName} />
			<StyledNameSpan>{tmName}</StyledNameSpan>
			<StyledStatusSpan isOnline={isOnline}></StyledStatusSpan>
		</StyledTeamLink>
	</StyledTeamLI>
);

ContactItem.propTypes = {
	tmId: PropTypes.string.isRequired,
	tmAvatar: PropTypes.string.isRequired,
	tmName: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};

export default ContactItem;
