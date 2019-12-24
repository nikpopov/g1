import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';

const Spinner = ({ active = false }) => (
		<div className={classNames('loading-spinner', { active })}>
			<i className="fa fa-spinner fa-pulse fa-3x fa-fw"/>
			<div className="overlay" />
		</div>
	);

Spinner.propTypes = {
	active: PropTypes.bool
};

export default connect(
	(state) => ({
		active: state.spinner.active
	})
)(Spinner);
