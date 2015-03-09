module.exports = function (config) {
    config.set({
        basePath: '',
        files: [
            '../app/js/vendor/angular/angular.js',
            '../app/js/vendor/angular-animate/angular-animate.js',
            '../app/js/vendor/angular-resource/angular-resource.js',
            '../app/js/vendor/angular-mocks/angular-mocks.js',

            '../app/js/vendor/tri-angular-async/dist/tri-angular-async.js',

            '../app/js/modules/**/*-module.js',
            '../app/js/modules/**/*-config.js',
            '../app/js/modules/**/*.js',

            'unit/**/*.coffee',
            'unit/**/*.js'
        ],

        exclude: [
            '../app/js/modules/main/main-run.js'
        ],
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
            '../app/js/modules/**/services/*.js': ['coverage'],
            '../app/js/modules/**/filters/*.js': ['coverage'],
            '../app/js/modules/**/directives/*.js': ['coverage'],
            '../app/js/modules/**/controllers/*.js': ['coverage'],
            'unit/**/*.coffee': ['coffee']
        },
        captureTimeout: 60000,
        singleRun: false,
        frameworks: ['jasmine']
    });
};

