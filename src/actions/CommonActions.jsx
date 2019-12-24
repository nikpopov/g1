// view actions
import { getActionType } from './ActionTypeCreator';
import CONTEXT from './ActionContext';

// loading spinner actions
export const SPINNER = {
	SHOW: getActionType(CONTEXT.SPINNER, 'SHOW'),
	HIDE: getActionType(CONTEXT.SPINNER, 'HIDE'),
	START: getActionType(CONTEXT.SPINNER, 'START'),
	STOP: getActionType(CONTEXT.SPINNER, 'STOP'),
	CLEAR: getActionType(CONTEXT.SPINNER, 'CLEAR')
};

// loading alert actions
export const ALERT = {
	SHOW: getActionType(CONTEXT.ALERT, 'SHOW'),
	HIDE: getActionType(CONTEXT.ALERT, 'HIDE'),
	OPEN_CONFIRM: getActionType(CONTEXT.ALERT, 'OPEN_CONFIRM'),
	CLOSE_CONFIRM: getActionType(CONTEXT.ALERT, 'CLOSE_CONFIRM')
};

export const MENU = {
	TOGGLE: getActionType(CONTEXT.MENU, 'TOGGLE')
};

export const UPPER_MENU = {
	SELECT_MENU: getActionType(CONTEXT.UPPER_MENU, 'SELECT_MENU'),
	SELECT_LOCALE: getActionType(CONTEXT.UPPER_MENU, 'SELECT_LOCALE'),
}
