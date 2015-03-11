'use strict';

angular
    .module('app')
    .controller('InvitationsCtrl', [
        '$scope',
        'Invitation',
        function ($scope, Invitation) {

            angular.extend(this, {

                cancel() {
                    $scope.theInvitation = null;
                },

                edit(invitation?) {
                    $scope.theInvitation = Invitation.generate(invitation);
                },

                reload() {
                    $scope.invitations = Invitation.query();
                    this.cancel();
                },

                remove(invitation) {
                    invitation.$delete().then(() => this.reload());
                },

                save() {
                    $scope.theInvitation.upsert().then(() => this.reload());
                }

            }).reload();

        }
    ]);
