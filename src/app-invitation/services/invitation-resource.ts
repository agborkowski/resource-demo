'use strict';

angular
    .module('app.invitation')
    .factory('Invitation', [
        '$resource',
        function ($resource) {
            var Invitation: any = $resource('/invitation/:invitationId', {
                invitationId: '@id'
            }, {
                update: {method: 'PUT'}
            });

            angular.extend(Invitation.prototype, {

                clone() {
                    return new Invitation(angular.extend({}, this));
                },

                upsert() {
                    return this.id ? this.$update() : this.$save();
                }

            });

            angular.extend(Invitation, {

                plainNewModel() {
                    return {invitee: {firstName: null, lastName: null, email: null}, status: {name: 'Created'}};
                },

                generate(invitation?) {
                    return invitation ? invitation.clone() : new this(this.plainNewModel());
                }

            });

            return Invitation;
        }
    ]);