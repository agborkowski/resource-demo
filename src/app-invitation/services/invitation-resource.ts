'use strict';

angular
    .module('app.invitation')
    .factory('Invitation', [
        '$resource',
        function ($resource) {
            return $resource('/invitation/:invitationId', {
                invitationId: '@id'
            });
        }
    ]);