//Core
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
	const { userId } = useSelector(state => state.auth);

	return (
		<Route
			{...routeProps}
			render={props => (userId ? <Component {...props} /> : <Redirect to="/login" />)}
		/>
	);
};

PrivateRoute.propTypes = {
	// userId: PropTypes.string,
};

PrivateRoute.defaultProps = {
	// userId: null,
};

export default PrivateRoute;
