if (typeof window !== 'undefined') {
	require('babel-polyfill');
	module.exports = {
		$: window.jQuery,
		Deferred: window.jQuery.Deferred,
		userLocale: window.userLocale,
		formatDate: window.formatDate,
		parseDate: window.getDateFromFormat
	};
} else {
	module.exports = {
		$: require('jquery'),
		userLocale: 'en-US',
		Calendar: {}
	};
}
