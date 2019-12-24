import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
import Strings from '../../constants/Strings';

class SettingContainer extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div></div>
		);
	}
}

SettingContainer.propTypes = {
	menuIndex: PropTypes.number,

};

export default connect(
	(state) => ({
		index: state.upperMenu.index,
		locale: state.upperMenu.locale,
	})
)(SettingContainer);
