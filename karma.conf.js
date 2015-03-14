module.exports = function(config) {
	config.set({

		//browsers: ['Chrome'],
		browsers: ['PhantomJS'],

		basePath: './',
		frameworks: ['browserify', 'mocha', 'chai', 'chai-as-promised', 'sinon-chai', 'chai-things'],

		reporters: ['nyan'],

		plugins: [
			'karma-browserify',
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-mocha',
			'karma-babel-preprocessor',
			'karma-chai-plugins',
			'karma-nyan-reporter'
		],

		preprocessors: {
			"src/**/*.js": ["browserify"],
			"test/unit/**/*.js": ["browserify"]
		},

		browserify: {
			debug: true,
			transform: [ 'babelify' ]
		},

		"babelPreprocessor": {
			options: {
				sourceMap: "inline"
			},
			filename: function(file) {
				return file.originalPath.replace(/\.js$/, ".es5.js");
			},
			sourceFileName: function(file) {
				return file.originalPath;
			}
		}

	});
};