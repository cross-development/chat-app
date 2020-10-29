//Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
`;

export const StyledListItem = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}
`;

export const StyledNavLink = styled(NavLink)`
	color: #ffffff;
	font-size: 32px;
	transition: color 250ms linear;

	&.active {
		color: #34495e;
	}

	&:hover {
		color: #34495e;
	}
`;
