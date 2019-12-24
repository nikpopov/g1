import { SPINNER } from '../actions/ActionType';
import { createReducer } from './ReducerCreator';
import { updateState } from '../utils/Utils';

const SpinnerReducer = createReducer({
	initialState: {
		active: false,
		counter: 0,
		startTimer: -1,
		stopTimer: -1
	},
	handlersMap: {
		[SPINNER.START]: (state, action) => updateState(state, {
			counter: state.counter + 1,
			startTimer: action.payload.startTimer
		}),
		[SPINNER.STOP]: (state, action) => updateState(state, {
			counter: state.counter - 1,
			stopTimer: action.payload.stopTimer
		}),
		[SPINNER.SHOW]: (state, action) => updateState(state, {
			active: true,
			startTimer: action.payload.startTimer
		}),
		[SPINNER.HIDE]: (state, action) => updateState(state, {
			active: false,
			stopTimer: action.payload.stopTimer
		}),
		[SPINNER.CLEAR]: (state, action) => updateState(state, {
			startTimer: action.payload.startTimer
		})
	}
});

export default SpinnerReducer;