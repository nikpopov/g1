/**
 * Reducer creator
 * @param initialState - initial state of reducer
 * @param mixinHandlers - handlers can add mixed behavior to reducer
 * @param handlersMap  - handlers map between action type and state changes
 */
import { updateState } from '../utils/Utils';
import { getActionType } from '../actions/ActionTypeCreator';
import ActionTypeSet from '../actions/ActionTypeSet';
import { CONTEXT } from '../actions/ActionType';
import ArrayUtils from '../utils/ArrayUtils';

export const createReducerHandlersMap = ({ actionContext, handlersMap }) => {
	const actions = Object.keys(handlersMap);
	const reducer = {};
	actions.forEach((action) => {
		reducer[getActionType(actionContext, action)] = handlersMap[action];
	});
	return reducer;
};

export const createReducer = ({ context = '', initialState = {}, mixinHandlers = [], handlersMap = {} } = {}) => {
	const reducerHandlersMap = Object.assign({}, ...mixinHandlers, handlersMap);

	let previousActionType;
	// save all action types to ActionTypeSet, it will check if there is no duplicated actions, which is possible issue.
	Object.keys(reducerHandlersMap).forEach((actionType, index) => {
		previousActionType = index === 0 ? actionType : previousActionType;

		ActionTypeSet.addUnique(actionType, previousActionType);

		previousActionType = actionType;
	});

	return (state = initialState, action) => {
		if (reducerHandlersMap[action.type]) {
			return reducerHandlersMap[action.type](state, action);
		} else {
			return state;
		}
	};
};

export const validateFormReducerHandlersMap = ({ actionContext }) => ({
	[getActionType(actionContext, ACTIONS.VALIDATE_ERROR)]: (state, action) => updateState(state, {
		validationError: true
	})
});

export const menuReducerHandlersMap = ({ actionContext }) => ({
	[getActionType(actionContext, ACTIONS.SELECT_MENU)]: (state, action) => updateState(state, {
		selectedMenu: action.payload.id
	}),
	[getActionType(actionContext, ACTIONS.TOGGLE_MENU)]: (state, action) => updateState(state, {
		collapsed: action.payload.collapsed
	})
});

export const menuReducerCreator = ({ actionContext, defaultMenu }) => createReducer({
	initialState: {
		selectedMenu: defaultMenu,
		collapsed: false
	},
	handlersMap: menuReducerHandlersMap({ actionContext })
});

export default createReducer;
