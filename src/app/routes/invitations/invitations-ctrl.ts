

declare module app {

    interface IInvitationsCtrlScope extends ng.IScope {
        invitations: app.invitation.IInvitationList;
    }

}

'use strict';

angular
    .module('app')
    .controller('InvitationsCtrl', [
        '$scope',
        'invitationList',
        function (
            $scope: app.IInvitationsCtrlScope,
            invitationList: app.invitation.IInvitationList
        ) {
            invitationList.reload();
            $scope.invitations = invitationList;
        }
    ]);
