//Core
import React from 'react';
//Styles
import { StyledName, StyledStatus, StyledStatusIcon, StyledAvatar } from './ChatHeader.styles';
import { StyledContainer, StyledProfileWrap, StyledNameWrap } from './ChatHeader.styles';

const ChatHeader = () => {
	return (
		<StyledContainer>
			<StyledProfileWrap>
				<StyledAvatar src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />

				<StyledNameWrap>
					<StyledName>John Doe</StyledName>

					<StyledStatus>
						<StyledStatusIcon isOnline={true}></StyledStatusIcon>
						Online
					</StyledStatus>
				</StyledNameWrap>
			</StyledProfileWrap>
		</StyledContainer>
	);
};

export default ChatHeader;
