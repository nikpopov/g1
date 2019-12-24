import ArrayUtils from './ArrayUtils';

export const noop = () => {};

export const callAsync = (fn) => {
	setTimeout(fn, 0);
};

export const stopPropagation = (event) => event.stopPropagation();

function getInternetExplorerVersion() {
	let rv = -1;
	if (navigator.appName === 'Microsoft Internet Explorer') {
		const ua = navigator.userAgent;
		const re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) !== null)
			rv = parseFloat(RegExp.$1);
	} else if (navigator.appName === 'Netscape') {
		const ua = navigator.userAgent;
		const re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			rv = parseFloat(RegExp.$1);
	}
	return rv;
}

export const isIE11 = 11 === getInternetExplorerVersion();
export const isIE = navigator.appName.indexOf("Explorer") > -1;// please do not include IE11+ in here, as old handling often breaks it.  Use isModernIE() for 11+
export const isEdge = /Edge/.test(navigator.userAgent);
export const isNewIE = isIE11 || isEdge;

export {
	ArrayUtils,
};

export const updateState = (obj, payload) => {
	return Object.assign(obj instanceof Array ? [] : {}, obj, payload);
};

export const isEmptyObject = (obj) => {
	if (typeof obj === 'object' && obj !== null) {
		return Object.keys(obj).length === 0;
	}
	return !obj;
};