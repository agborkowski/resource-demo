'use strict';

angular
    .module('app.main')
    .run([
        '$location',
        '$log',
        '$rootScope',
        function ($location: ng.ILocationService, $log: ng.ILogService, $rootScope: ng.IRootScopeService) {

            var _log = (evt) => (a, b, c) => $log.debug(
                '========== ' + evt + ' ======================\n',
                (b && b.originalPath ? b.originalPath : b) + '\n',
                (c && c.originalPath ? c.originalPath : c) + '\n',
                '============================================\n\n'
            );
            $rootScope.$on('$locationChangeStart', _log('$locationChangeStart'));
            $rootScope.$on('$locationChangeSuccess', _log('$locationChangeSuccess'));
            $rootScope.$on('$routeChangeStart', _log('$routeChangeStart'));
            $rootScope.$on('$routeChangeSuccess', _log('$routeChangeSuccess'));


        }
    ]);
