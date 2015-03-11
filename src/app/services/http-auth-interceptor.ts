'use strict';
angular
    .module('app')
    .factory('httpAuthInterceptor', [
        '$q',
        '$async',
        '$rootScope',
        function ($q: ng.IQService, $async: tri.IAsyncService, $rootScope: ng.IRootScopeService) {
            return {
                responseError(rejection: ng.IHttpPromiseCallbackArg<any>): ng.IPromise<any> {
                    if (rejection.status === 401) {
                        $async(() => $rootScope.$emit('$opLoggedOut'));
                    }
                    return $q.reject(rejection);
                }
            };
        }
    ]);