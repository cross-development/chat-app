//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
//Components
import Layout from './Layout';
import Loader from './Loader';
import SideBar from './SideBar';
import ContactsBar from './ContactsBar';
import ContactProfile from './ContactProfile';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { authStateChangeUser } from 'redux/auth/authOperations';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { uid } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authStateChangeUser());
	}, [dispatch]);

	return (
		<Router>
			<SideBar />

			{uid && <ContactsBar />}

			<Layout>
				<Suspense fallback={<Loader onLoad={true} />}>
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

			{uid && <ContactProfile />}
		</Router>
	);
};

export default App;

// import { FaPaperclip, FaVideo } from 'react-icons/fa';
