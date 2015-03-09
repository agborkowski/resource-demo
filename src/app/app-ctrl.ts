'use strict';

angular
    .module('app')
    .controller('AppCtrl', ['$rootScope', function ($rootScope: ng.IRootScopeService) {
        $rootScope.version = '0.0.0';
    }]);
