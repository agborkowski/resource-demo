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
                    $scope.theInvitation = new Invitation(angular.extend({}, invitation));
                },

                add() {
                    $scope.theInvitation = new Invitation({
                        invitee: {
                            firstName: null,
                            lastName: null,
                            email: null
                        },
                        status: {
                            name: 'Created'
                        }
                    });
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
