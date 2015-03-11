'use strict';

angular
    .module('app.invitation')
    .factory('Invitation', [
        '$resource',
        function ($resource) {
            var Invitation = $resource('/invitation/:invitationId', {
                invitationId: '@id'
            }, {
                update: {method: 'PUT'}
            });

            angular.extend(Invitation.prototype, {

                clone() {
                    return new Invitation(angular.extend({}, this));
                }

            });

            return Invitation;
        }
    ]);