'use strict';

angular
    .module('app')
    .controller('InvitationsCtrl', [
        '$scope',
        'Invitation',
        function ($scope, Invitation) {

            angular.extend(this, {

                reload() {
                    $scope.invitations = Invitation.query();
                },

                remove(invitation) {
                    invitation.$delete().then(() => this.reload());
                }

            }).reload();

        }
    ]);
