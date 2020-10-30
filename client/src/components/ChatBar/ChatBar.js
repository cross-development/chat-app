//Core
import React from 'react';
//Components
import ChatHeader from './ChatHeader';
import ChatArea from './ChatArea';
import ChatFooter from './ChatFooter';
//Styles
import styled from 'styled-components';

const ChatBar = () => {
	return (
		<StyledContainer>
			<ChatHeader />

			<ChatArea />

			<ChatFooter />
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export default ChatBar;
