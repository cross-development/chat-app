//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
	/* margin-top: auto; */
	/* margin-bottom: 0; */
`;

export const StyledListItem = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}
`;

export const StyledItemLink = styled(Link)`
	color: #ffffff;
	font-size: 32px;
	transition: color 250ms linear;

	&:hover {
		color: #34495e;
	}
`;
