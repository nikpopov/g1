class ActionTypeSet {

	constructor() {
		this._set = new Set();
		this.showNext = false;
	}

	addUnique(actionType, previousActionType) {
		if (this.showNext) {
			console.log('%c HINT: Next action type: ', 'color: red', actionType);
			this.showNext = false;
		}
		if (actionType === 'undefined') {
			console.log('%c ERROR: Found undefined type!', 'color: red');
			console.log('%c HINT: Previous action type: ', 'color: red', previousActionType);
			this.showNext = true;
		} else if (this._set.has(actionType)) {
			console.log('%c ERROR: Duplicated action type: ', 'color: red', actionType);
			console.log('%c HINT: Previous action type: ', 'color: red', previousActionType);
			this.showNext = true;
		}
		this._set.add(actionType);
	}

	checkMissing(actionType) {
		if (!this._set.has(actionType)) {
			console.log('%c ERROR: Unhandled action type: ', 'color: red', actionType);
			alert(`ERROR: Unhandled action type: ${actionType}`);
		}
	}
}

const actionTypeSet = new ActionTypeSet();

export default actionTypeSet;