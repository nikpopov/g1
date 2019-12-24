import React from 'react';
import { Provider } from 'react-redux';
import Application from './Application';
import PropTypes from 'prop-types';


const RootContainer = ({ store }) => (
	<Provider store={store}>
		<Application />
	</Provider>
);

RootContainer.propTypes = {
	store: PropTypes.object.isRequired
};

export default RootContainer;