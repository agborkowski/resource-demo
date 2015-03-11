'use strict';

angular
    .module('app')
    .controller('InvitationsCtrl', [
        '$scope',
        'Invitation',
        function ($scope, Invitation) {

            $scope.invitations = Invitation.query();

        }
    ]);
