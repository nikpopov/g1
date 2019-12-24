import { createReducer } from './ReducerCreator';
import { CONTEXT, UPPER_MENU } from '../actions/ActionType';
import { updateState } from '../utils/Utils';

const upperMenuInitialState = {
	index: 0,
	locale: "en"
}

const UpperMenuReducer = createReducer({
	initialState: upperMenuInitialState,
	handlersMap: {
		[UPPER_MENU.SELECT_MENU]: (state, action) => updateState(state, {
			index: action.payload,
		}),
		[UPPER_MENU.SELECT_LOCALE]: (state, action) => updateState(state, {
			locale: action.payload,
		}),
	}
});

export default UpperMenuReducer;