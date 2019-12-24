
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';
import RootContainer from './containers/RootContainer';
import store from './stores/Store';

const root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

ReactDOM.render(
	<RootContainer store={store} />,
	document.getElementById('root')
);
