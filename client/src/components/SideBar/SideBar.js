//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styled from 'styled-components';

const SideBar = () => {
	return <StyledAside>SideBar</StyledAside>;
};

SideBar.propTypes = {};

const StyledAside = styled.aside`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
	height: 100vh;
	width: 7%;
	background-color: #74b9ff;
`;

export default SideBar;
