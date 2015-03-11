
declare module app {

    interface IInvitationCtrlScope extends ng.IScope {
        invitation: app.invitation.IInvitationResource
    }

}

'use strict';

angular
    .module('app')
    .controller('InvitationCtrl', [
        '$scope',
        '$state',
        'Invitation',
        function (
            $scope: app.IInvitationCtrlScope,
            $state: ng.ui.IStateService,
            Invitation: app.invitation.IInvitationResourceClass
        ) {
            $scope.invitation = Invitation.get({invitationId: $state.params.invitationId});
        }
    ]);