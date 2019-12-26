import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createAction } from 'redux-actions';
import Strings from '../constants/Strings';

class LocaleMenu extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const locale = this.props.locale;
		return (
			<Fragment>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						{Strings.locale[locale]}
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a 
							className="dropdown-item"
							href="#"
							onClick={() => this.props.onSelectLocale("en")}
						>
							{Strings.english[locale]}

						</a>
						<a
							className="dropdown-item"
							href="#"
							onClick={() => this.props.onSelectLocale("de")}
						>
							{Strings.german[locale]}
						</a>
						<a
							className="dropdown-item"
							href="#"
							onClick={() => this.props.onSelectLocale("es")}
						>
							{Strings.spanish[locale]}
						</a>
						<a
							className="dropdown-item"
							href="#"
							onClick={() => this.props.onSelectLocale("ua")}
						>
							{Strings.ukrainian[locale]}
						</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default LocaleMenu;
