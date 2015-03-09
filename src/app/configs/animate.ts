'use strict';
angular
    .module('app.main')
    .config(['$animateProvider', function ($animateProvider) {
        $animateProvider.classNameFilter(/^((?!(no-animate|x-no-animate)).)*$/);
    }]);