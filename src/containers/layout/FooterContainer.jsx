import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
//import { Row, Col, Nav, NavDropdown } from 'react-bootstrap';

class FooterContainer extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div className="col-md-12">
				Footer
			</div>
		);
	}
}

FooterContainer.propTypes = {
	
};

export default FooterContainer;
