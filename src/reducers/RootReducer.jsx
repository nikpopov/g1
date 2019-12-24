import { combineReducers } from 'redux';

import spinner from './SpinnerReducer';
import upperMenu from './UpperMenuReducer';

// combined reducer
const RootReducer = combineReducers({
	spinner,
	upperMenu
	
});

export default RootReducer;

