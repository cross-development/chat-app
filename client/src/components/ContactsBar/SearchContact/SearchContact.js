//Core
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
//Styles
import { StyledFilterInput, StyledClearButton } from './SearchContact.styles';
import { StyledFilterWrapDiv, StyledFilterLabel } from './SearchContact.styles';

const SearchContact = ({ value, onClearFilter, onChangeFilter }) => {


	return (
		<StyledFilterWrapDiv>
			<StyledFilterLabel>
				Your teammates
				<StyledFilterInput
					type="text"
					value={value}
					autoComplete="off"
					placeholder="Search a teammate"
					onChange={e => onChangeFilter(e.target.value)}
				/>
				{value.length > 0 && (
					<StyledClearButton
						type="button"
						value={value.length}
						onClick={onClearFilter}
					></StyledClearButton>
				)}
			</StyledFilterLabel>
		</StyledFilterWrapDiv>
	);
};

SearchContact.propTypes = {
	value: PropTypes.string.isRequired,
	onClearFilter: PropTypes.func.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default SearchContact;
