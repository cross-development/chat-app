//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
//Components
import Layout from './Layout';
import Loader from './Loader';
import SideBar from './SideBar';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { authStateChangeUser } from 'redux/auth/authOperations';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { stateChange } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authStateChangeUser());
	}, []);

	return (
		<Router>
			<SideBar />

			<Layout>
				<Suspense fallback={<Loader onLoad={!stateChange} />}>
					<Switch>
						{routes.map(route =>
							route.private ? (
								<PrivateRoute key={route.path} {...route} />
							) : (
								<PublicRoute key={route.path} {...route} />
							),
						)}
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	);
};

export default App;
