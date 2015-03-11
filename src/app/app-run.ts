//'use strict';
//
//angular
//    .module('app')
//    .run([
//        '$location',
//        '$log',
//        '$rootScope',
//        function ($location: ng.ILocationService, $log: ng.ILogService, $rootScope: ng.IRootScopeService) {
//
//            var _log = (evt) => (a, b?, c?) => $log.log(evt, a, b, c);
//            $rootScope.$on('$locationChangeStart', _log('$locationChangeStart'));
//            $rootScope.$on('$locationChangeSuccess', _log('$locationChangeSuccess'));
//            $rootScope.$on('$stateChangeStart', _log('$stateChangeStart'));
//            $rootScope.$on('$stateChangeSuccess', _log('$stateChangeSuccess'));
//            _log('$location')($location.host(), $location.port(), $location.url());
//        }
//    ]);