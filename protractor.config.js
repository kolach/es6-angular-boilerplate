
exports.config = {

	allScriptsTimeout: 11000,

	//seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities: {
		'browserName': 'chrome'
	},

	//framework: 'mocha',
	frameworks: ['mocha', 'chai', 'chai-as-promised', 'sinon-chai', 'chai-things'],
};