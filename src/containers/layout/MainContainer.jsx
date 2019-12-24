import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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
		return (
			{
				switch (this.props.menuIndex) {
					case 0:
						<HomeContainer />
					case 1:
						<AboutContainer />
					case 2:
						<SettingContainer />
					case 3:
						<HelpContainer />
					default:
						<
				}
			}
		);
	}
}

MainContainer.propTypes = {
	menuIndex: PropTypes.number,

};

export default connect(
	(state) => ({
		index: state.upperMenu.index,
		locale: state.upperMenu.locale,
	})
)(MainContainer);
