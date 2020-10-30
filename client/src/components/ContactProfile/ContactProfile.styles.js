//Core
import styled from 'styled-components';

export const StyledSection = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 15%;
	background-color: #3498db;
	padding: 2rem 0;
	box-shadow: 0 0 8px 1px #3498db;
`;

export const StyledContainer = styled.div`
	width: 80%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const StyledAvatarWrap = styled.div`
	width: 100%;
	height: auto;
`;

export const StyledAvatarImg = styled.img`
	display: block;
	width: 100%;
	height: auto;
	border-radius: 50%;
`;

export const StyledName = styled.h2`
	font-size: 32px;
	color: #3d3b3b;
`;

export const StyledBtnWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
`;

export const StyledBtn = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	outline: none;
	color: #ffffff;
	font-size: 32px;
`;

export const StyledOptionsList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
`;

export const StyledOptionsItem = styled.li`
	list-style: none;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`;
