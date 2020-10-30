//Core
import styled from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	height: auto;
	padding: 0.5rem 0 0.5rem 1rem;
	/* border-bottom: 2px solid #d1d3d4; */
	box-shadow: 0 0 8px 0.5px #d1d3d4;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
`;

export const StyledProfileWrap = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: flex-start;
	width: 35%;
`;

export const StyledAvatar = styled.img`
	display: block;
	width: 20%;
	height: 20%;
	margin-right: 1rem;
`;

export const StyledNameWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const StyledName = styled.h2`
	font-size: 22px;
`;

export const StyledStatus = styled.p`
	width: 100%;
	display: flex;
	align-items: center;
	font-size: 14px;
`;

export const StyledStatusIcon = styled.span`
	display: block;
	width: 12px;
	height: 12px;
	background-color: ${({ isOnline }) => (isOnline ? '#00FF1A' : '#FF0606')};
	border-radius: 50%;
	margin-right: 0.5rem;
`;
