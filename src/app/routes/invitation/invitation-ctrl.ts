'use strict';

angular
    .module('app')
    .controller('InvitationCtrl', [
        '$scope',
        '$state',
        function ($scope, $state) {
            $scope.invitation = $state.params.invitationId;
        }
    ]);