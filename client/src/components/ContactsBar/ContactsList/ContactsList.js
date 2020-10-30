//Core
import React from 'react';
//Components
import ContactItem from '../ContactItem';
//Styles
import { StylesTeamUL, StylesTitle } from './ContactsList.styles';

const ContactsList = () => {
	//Remove it after contacts will receive from redux or server
	const contacts = ['Tom', 'John'];

	return (
		<>
			<StylesTitle>Chats</StylesTitle>

			<StylesTeamUL>
				{contacts.map(({ tmId, tmName, tmAvatar, isOnline }) => (
					<ContactItem tmId={tmId} tmName={tmName} tmAvatar={tmAvatar} isOnline={isOnline} />
				))}
			</StylesTeamUL>
		</>
	);
};

export default ContactsList;
