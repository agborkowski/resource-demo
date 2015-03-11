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
                    this.cancel();
                },

                remove(invitation) {
                    invitation.$delete().then(() => this.reload());
                },

                edit(invitation) {
                    $scope.theInvitation = invitation.clone();
                },

                add() {
                    $scope.theInvitation = Invitation.generate();
                },

                cancel() {
                    $scope.theInvitation = null;
                },

                save() {
                    $scope.theInvitation.$save().then(() => this.reload());
                },

                update() {
                    $scope.theInvitation.$update().then(() => this.reload());
                }

            }).reload();

        }
    ]);
