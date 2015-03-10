'use strict';
angular
    .module('app')
    .factory('httpAuthInterceptor', [
        '$q',
        '$async',
        '$rootScope',
        function ($q: ng.IQService, $async: tri.IAsyncService, $rootScope: ng.IRootScopeService) {
            return {
                responseError: function (rejection) {
                    if (rejection.status === 401) {
                        $async(function () {
                            $rootScope.$emit('$opLoggedOut');
                        });
                    }
                    return $q.reject(rejection);
                }
            };
        }
    ]);