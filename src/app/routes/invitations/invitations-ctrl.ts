

declare module app {

    interface IInvitationsCtrl {
        cancel(): void;
        edit(invitation?: app.invitation.IInvitationResource): void;
        reload(): void;
        remove(invitation: app.invitation.IInvitationResource): void;
        save(): void;
    }

    interface IInvitationsCtrlScope extends ng.IScope {
        invitations: app.invitation.IInvitationResourceArray;
        theInvitation: app.invitation.IInvitationResource;
        invitationsCtrl: IInvitationsCtrl;
    }

}

'use strict';

angular
    .module('app')
    .controller('InvitationsCtrl', [
        '$scope',
        'Invitation',
        function (
            $scope: app.IInvitationsCtrlScope,
            Invitation: app.invitation.IInvitationResourceClass
        ) {

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
