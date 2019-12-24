import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createAction } from 'redux-actions';
import { CONTEXT, UPPER_MENU } from '../../actions/ActionType';
import UpperMenu from '../../components/UpperMenu';
import LocaleMenu from '../../components/LocaleMenu';
import Strings from '../../constants/Strings';

class UpperMenuContainer extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.actionContext = CONTEXT.UPPER_MENU;
		this.onChangeMenu = this.onChangeMenu.bind(this);
		this.onSelectLocale = this.onSelectLocale.bind(this);
	}

	onChangeMenu(index) {
		this.props.dispatch(createAction(UPPER_MENU.SELECT_MENU)(index));
	}

	onSelectLocale(locale) {
		this.props.dispatch(createAction(UPPER_MENU.SELECT_LOCALE)(locale));	
	}

	render() {
		return (
			<Fragment>
				<div className="row">
					<h2>

					</h2>
				</div>
				<div className="row">
					<UpperMenu 
						index={this.props.index}
						locale={this.props.locale}
						onChangeMenu={this.onChangeMenu}
					/>
					<LocaleMenu 
						locale={this.props.locale}
						onSelectLocale={this.onSelectLocale}
					/>
				</div>
			</Fragment>
		);
	}
}

UpperMenuContainer.propTypes = {
	index: PropTypes.number,
	locale: PropTypes.string,
};

export default connect(
	(state) => ({
		index: state.upperMenu.index,
		locale: state.upperMenu.locale,
	})
)(UpperMenuContainer);
