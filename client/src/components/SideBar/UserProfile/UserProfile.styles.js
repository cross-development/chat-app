//Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAvatarWrap = styled.div`
	width: 48px;
	height: 48px;
`;

export const StyledAvatarImg = styled.img`
	display: block;
	width: 100%;
	height: auto;
	border-radius: 50%;
`;

export const StyledNavLink = styled(NavLink)`
	color: #ffffff;
	font-size: 32px;
	transition: color 250ms linear;

	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}

	&.active {
		color: #34495e;
	}

	&:hover {
		color: #34495e;
	}
`;
