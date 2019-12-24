import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAction } from 'redux-actions';
import Strings from '../../constants/Strings';

class SettingContainer extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div>
				Setting Container
			</div>
		);
	}
}

SettingContainer.propTypes = {
	
};

export default connect(
	
)(SettingContainer);
