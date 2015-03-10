'use strict';
angular
    .module('app')
    .config(['$animateProvider', function ($animateProvider) {
        $animateProvider.classNameFilter(/^((?!(no-animate|x-no-animate)).)*$/);
    }]);