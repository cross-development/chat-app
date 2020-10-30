//Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledTeamLI = styled.li`
	list-style: none;
	border-bottom: 1px solid #444444;
	padding: 0.5rem 0.7rem;

	&:first-child {
		border-top: 1px solid #444444;
	}
`;

export const StyledTeamLink = styled(NavLink)`
	text-decoration: none;
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	&.active {
		background-color: #616161;
	}
`;

export const StyledAvatarIMG = styled.img`
	margin-right: 1rem;
`;

export const StyledNameSpan = styled.span`
	/* ... */
`;

export const StyledStatusSpan = styled.span`
	width: 15px;
	height: 15px;
	display: ${props => (props.isOnline ? 'block' : 'none')};
	background-color: #8bc34a;
	border-radius: 50px;
	margin-left: auto;
	margin-right: 0;
`;
