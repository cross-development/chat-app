//Core
import React from 'react';
//Styles
import { FaHeart, FaPhoneAlt, FaVideo } from 'react-icons/fa';
import { StyledName, StyledBtnWrap, StyledContainer } from './ContactProfile.styles';
import { StyledOptionsList, StyledOptionsItem, StyledBtn } from './ContactProfile.styles';
import { StyledSection, StyledAvatarWrap, StyledAvatarImg } from './ContactProfile.styles';

const ContactProfile = () => {
	return (
		<StyledSection>
			<StyledContainer>
				<StyledAvatarWrap>
					<StyledAvatarImg src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
				</StyledAvatarWrap>

				<StyledName>John Doe</StyledName>

				<StyledBtnWrap>
					<StyledBtn type="button" title="Call">
						<FaPhoneAlt />
					</StyledBtn>
					<StyledBtn type="button" title="Video">
						<FaVideo />
					</StyledBtn>
					<StyledBtn type="button" title="Add to favorite">
						<FaHeart />
					</StyledBtn>
				</StyledBtnWrap>

				{/* add html icons code for items */}
				<StyledOptionsList>
					<StyledOptionsItem>
						Shared items <span>&#9658;</span>
					</StyledOptionsItem>
					<StyledOptionsItem>
						Block <span>&#8855;</span>
					</StyledOptionsItem>
				</StyledOptionsList>
			</StyledContainer>
		</StyledSection>
	);
};

export default ContactProfile;
