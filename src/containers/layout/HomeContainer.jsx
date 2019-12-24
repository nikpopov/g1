import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAction } from 'redux-actions';
import Strings from '../../constants/Strings';

class HomeContainer extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div>
				Home Container
			</div>
		);
	}
}

HomeContainer.propTypes = {
	

};

export default connect(
	
)(HomeContainer);
