import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAction } from 'redux-actions';
import HomeContainer from './HomeContainer';
import AboutContainer from './AboutContainer';
import SettingContainer from './SettingContainer';
import HelpContainer from './HelpContainer';
import Strings from '../../constants/Strings';

class MainContainer extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const menuItem = this.props.menuIndex;		
		switch (menuItem) {
			case 0:
				return <HomeContainer />;
			case 1:
				return <AboutContainer />;
			case 2:
				return <SettingContainer />;
			case 3:
				return <HelpContainer />;
			default:
				return null;
		}
	}
}

MainContainer.propTypes = {
	menuIndex: PropTypes.number,
	locale: PropTypes.string,
};

export default connect(
	(state) => ({
		menuIndex: state.upperMenu.index,
		locale: state.upperMenu.locale,
	})
)(MainContainer);
