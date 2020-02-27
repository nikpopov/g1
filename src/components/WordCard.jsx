import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAction } from 'redux-actions';
import Strings from '../constants/Strings';

class WordCard extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const card = this.props.card;
		return (
			<div className="col-md-8 offset-md-2">
				<div className="card_wrapper">
					<div
						className="card"
						style={{
							backgroundSize:  "cover",
							backgroundRepeat: "no-repeat",
							backgroundImage: `url(${card.imageURL})`,
							backgroundPositionX: "center",
							backgroundPositionY: "center"
						}}
					>			
					</div>
				</div>
			</div>
		);
	}
}

export default WordCard;

