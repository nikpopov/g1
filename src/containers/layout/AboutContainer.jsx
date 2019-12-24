import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAction } from 'redux-actions';
import Strings from '../../constants/Strings';

class AboutContainer extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div>
				About Container
			</div>
		);
	}
}

AboutContainer.propTypes = {
	
};

export default connect(
	
)(AboutContainer);
