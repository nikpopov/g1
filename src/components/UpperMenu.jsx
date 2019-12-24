import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createAction } from 'redux-actions';
import Strings from '../constants/Strings';

class UpperMenu extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const locale = this.props.locale;
		return (
			<Fragment>
				<div className="col-md-5 offset-md-6">
						<div className="justify-content-end">
							<ul className="nav nav-pills nav-fill">
								<li className="nav-item">
									<a 
										className={classnames({
											'nav-link': true,
											'active': this.props.index === 0
										})}
										href="#"
										onClick={() => this.props.onChangeMenu(0)}
									>
										{Strings.home[locale]}
									</a>
								</li>
								<li className="nav-item">
									<a 
										className={classnames({
											'nav-link': true,
											'active': this.props.index === 1
										})}
										href="#"
										onClick={() => this.props.onChangeMenu(1)}
									>
										{Strings.about[locale]}
									</a>
								</li>
								<li className="nav-item">
									<a 
										className={classnames({
											'nav-link': true,
											'active': this.props.index === 2
										})}
										href="#"
										onClick={() => this.props.onChangeMenu(2)}
									>
										{Strings.setting[locale]}
									</a>
								</li>
								<li className="nav-item">
									<a 
										className={classnames({
											'nav-link': true,
											'active': this.props.index === 3
										})}
										href="#"
										onClick={() => this.props.onChangeMenu(3)}
									>
										{Strings.help[locale]}
									</a>
								</li>
							</ul>
						</div>
					</div>
			</Fragment>
		);
	}
}

export default UpperMenu;
