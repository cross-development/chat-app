//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'Home',
		exact: true,
		private: false,
		restricted: false,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/RegisterPage' /* webpackChunkName: "register-page"*/)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		private: false,
		restricted: true,
		component: lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page"*/)),
	},
	{
		path: '/messages/:msgId',
		label: 'Messages',
		exact: false,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/ChatPage' /* webpackChunkName: "messages-page" */)),
	},
	{
		path: '/settings',
		label: 'Settings',
		exact: false,
		private: true,
		restricted: false,
		component: lazy(() => import('pages/SettingsPage' /* webpackChunkName: "settings-page" */)),
	},
];

export default routes;
