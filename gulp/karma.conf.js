module.exports = function (config) {
    config.set({
        basePath: '../',
        //files: [],
        //exclude: [],
        reporters: ['dots', 'coverage'],
        port: 9876,
        runnerPort: 9100,
        colors: true,
        logLevel: config.LOG_WARN,
        autoWatch: true,
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-coffee-preprocessor',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],
        preprocessors: {
            '.tmp/js/modules/app/routes/**/*.js': ['coverage'],
            '.tmp/js/modules/app/app-ctrl.js': ['coverage'],
            '.tmp/js/modules/**/components/**/*.js': ['coverage'],
            '.tmp/js/modules/**/filters/**/*.js': ['coverage'],
            '.tmp/js/modules/**/services/**/*.js': ['coverage'],
            'src/**/*-spec.coffee': ['coffee']
        },
        captureTimeout: 60000,
        singleRun: false,
        frameworks: ['jasmine']
    });
};

