'use strict';
angular
    .module('app.main')
    .config([
        '$httpProvider',
        function ($httpProvider) {
            $httpProvider.interceptors.push('httpAuthInterceptor');
        }
    ]);