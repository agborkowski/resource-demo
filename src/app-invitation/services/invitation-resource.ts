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

            angular.extend(Invitation, {

                generate() {
                    return new this({
                        invitee: {
                            firstName: null,
                            lastName: null,
                            email: null
                        },
                        status: {
                            name: 'Created'
                        }
                    });
                }

            });

            return Invitation;
        }
    ]);