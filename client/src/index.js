//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Redux
import { store } from 'redux/store';
import { Provider } from 'react-redux';
//Firebase
import './firebase';
//Styles
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
