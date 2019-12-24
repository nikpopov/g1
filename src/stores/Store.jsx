import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';
import ActionTypeSet from '../actions/ActionTypeSet';
import { CONTEXT } from '../actions/ActionType';

const addLoggingToDispatch = ({ getState }) => (next) => (action) => {

	const diff = (lhs, rhs) => {
		if (lhs === rhs) return {}; // equal return no diff

		const acc = {};

		Object.keys(rhs).forEach((key) => {
			if (rhs.hasOwnProperty(key)) {
				if (!lhs.hasOwnProperty(key) || lhs[key] !== rhs[key]) {
					acc[key] = rhs[key];
				}
			}
		});

		return acc;
	};

	if (!console.group) {
		return next(action);
	}
	if (action && action.type) {
		const prevState = getState();
		ActionTypeSet.checkMissing(action.type);
		console.groupCollapsed(action.type);
		console.log('%c payload', 'color: DodgerBlue', action.payload);
		const returnValue = next(action);
		const nextState = getState();
		console.log('%c next state', 'color: LimeGreen', nextState);
		console.log('%c diffs', 'color: Orchid', diff(prevState, nextState));
		console.groupEnd(action.type);
		return returnValue;
	} else {
		return next(action);
	}
};

const deffered = (store) => (next) => (action) => {
	if (action.payload && typeof action.payload.done === 'function') {
		return action.payload.done((response) => next({
			type: action.type,
			payload: response
		}));
	} else {
		return next(action);
	}
};

const store = createStore(RootReducer, applyMiddleware(thunk, deffered, addLoggingToDispatch));

export default store;
