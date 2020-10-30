//Core
import styled from 'styled-components';

export const StylesTitle = styled.h2`
	font-size: 18px;
	font-weight: 400;
	line-height: 22px;
	color: #a7a9ab;
	margin: 0 auto 0 10px;
`;

export const StylesTeamUL = styled.ul`
	margin-left: 0;
	margin-right: auto;
	width: 100%;
	min-height: 80%;
	max-height: 80%;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: #424242;
	}

	&::-webkit-scrollbar-thumb {
		background: #7a7e81;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #9e9e9e;
	}
`;
