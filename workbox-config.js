module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,js,ico,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};