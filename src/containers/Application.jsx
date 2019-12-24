import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './globals/Spinner';
import UpperMenuContainer from './layout/UpperMenuContainer';
import MainContainer from './layout/MainContainer';
import FooterContainer from './layout/FooterContainer';

class Application extends React.Component {

	componentWillMount() {
		this.loadData();
	}

	loadData() {
		
	}

	render() {
		return (
			<div className="container-fluid">
				<Spinner />
				<UpperMenuContainer />
				<MainContainer />
				<FooterContainer />
			</div>
		);
	}
}

export default Application;
