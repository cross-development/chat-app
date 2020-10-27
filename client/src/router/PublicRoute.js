//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...routeProps }) => {
	const { userId } = useSelector(state => state.auth);

	return (
		<Route
			{...routeProps}
			render={props =>
				userId && routeProps.restricted ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

PublicRoute.propTypes = {
	// userId: PropTypes.string,
};

PublicRoute.defaultProps = {
	// userId: null,
};

export default PublicRoute;
