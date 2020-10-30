//Core
import React, { useState } from 'react';
//Components
import SearchContact from './SearchContact';
import ContactsList from './ContactsList';
//Styles
import styled from 'styled-components';

const ContactsBar = () => {
	const [filter, setFilter] = useState('');

	const handleChangeFilter = filter => setFilter(filter);

	const handleClearFilter = () => setFilter('');

	return (
		<StyledSection>
			<SearchContact
				value={filter}
				onClearFilter={handleClearFilter}
				onChangeFilter={handleChangeFilter}
			/>

			<ContactsList />
		</StyledSection>
	);
};

const StyledSection = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	/* justify-content: space-between; */
	height: 100vh;
	width: 20%;
	/* border-right: 2px solid #d1d3d4; */
	/* background-color: #3498db; */
	padding-top: 2rem;
	/* box-shadow: 0 0 8px 0.5px #d1d3d4; */
`;

export default ContactsBar;
