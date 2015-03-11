'use strict';

angular
    .module('app')
    .controller('InvitationCtrl', [
        '$scope',
        '$state',
        'Invitation',
        function ($scope, $state, Invitation) {
            $scope.invitation = Invitation.get({invitationId: $state.params.invitationId});
        }
    ]);